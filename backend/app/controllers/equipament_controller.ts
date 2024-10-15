import Category from '#models/category'
import Equipament from '#models/equipament'
import { createPostValidator } from '#validators/equipament'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipamentController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const equipaments = await Equipament.query().preload('category')

    const equipamentsJson = equipaments.map((equipament) => {
      return equipament.serialize({
        fields: {
          omit: ['description'],
        },
        relations: {
          category: {
            fields: ['id', 'name'],
          },
        },
      })
    })

    response.status(200).json(equipamentsJson)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.body()

    const payload = await createPostValidator.validate(data)

    const categoryFound = await Category.find(payload.categoryId)

    if (categoryFound === null) {
      return response.status(400).json('Category not found.')
    }

    const equipamentoToStore = new Equipament()
    equipamentoToStore.manufacturer = payload.manufacturer
    equipamentoToStore.model = payload.model
    equipamentoToStore.description = payload.description

    await equipamentoToStore.related('category').associate(categoryFound)

    const equipamentCreated = await Equipament.find(equipamentoToStore.id)

    await equipamentCreated?.load('category')

    response.status(201).json(equipamentCreated)
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
