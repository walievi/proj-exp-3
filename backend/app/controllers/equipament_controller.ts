import Category from '#models/category'
import Equipament from '#models/equipament'
import Status from '#models/status'
import { createPostValidator } from '#validators/equipament'
import type { HttpContext } from '@adonisjs/core/http'

export default class EquipamentController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const equipaments = await Equipament.query().preload('status')

    const equipamentsJson = equipaments.map((equipament) => {
      return equipament.serialize({
        fields: {
          omit: ['description'],
        },
        relations: {
          status: {
            fields: ['name'],
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

    const [statusFound, categoryFound] = await Promise.all([
      Status.find(payload.statusId),
      Category.find(payload.categoryId),
    ])

    const equipamentCreated = new Equipament()
    equipamentCreated.code = payload.code
    equipamentCreated.model = payload.model
    equipamentCreated.description = payload.description
    equipamentCreated.quantity = payload.quantity

    await equipamentCreated.related('status').associate(statusFound)

    //response.status(201).json(equipamentCreated)
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
