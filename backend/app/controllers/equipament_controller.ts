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
    equipamentoToStore.serialNumber = payload.serialNumber
    equipamentoToStore.description = payload.description

    await equipamentoToStore.related('category').associate(categoryFound)

    const equipamentCreated = await Equipament.find(equipamentoToStore.id)

    await equipamentCreated?.load('category')

    response.status(201).json(equipamentCreated)
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const equipamentId = Number(params.id)
  
    // Carrega todos os equipamentos com a categoria
    const equipaments = await Equipament.query().preload('category')
  
    // Serializa os equipamentos
    const equipamentsJson = equipaments.map((equipament) => {
      return equipament.serialize({
        relations: {
          category: {
            fields: ['id', 'name'],
          },
        },
      })
    })
  
    // Filtra o equipamento pelo id
    const equipament = equipamentsJson.find((equipament) => equipament.id === equipamentId)
  
    if (!equipament) {
      return response.status(404).json({ message: "Equipamento não encontrado." })
    }
  
    // Retorna o equipamento encontrado
    return response.status(200).json(equipament)
  }
  

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    const equipamentId = params.id;
    const data = request.body();

    const equipament = await Equipament.find(equipamentId);

    if (!equipament) {
      return response.status(404).json({ message: "Equipamento não encontrado." });
    }

    const categoryFound = await Category.find(data.categoryId);

    if (!categoryFound) {
      return response.status(400).json({ message: "Categoria não encontrada." });
    }

    equipament.model = data.model || equipament.model;
    equipament.serialNumber = data.serialNumber || equipament.serialNumber;
    equipament.manufacturer = data.manufacturer || equipament.manufacturer;
    equipament.description = data.description || equipament.description;

    await equipament.related('category').associate(categoryFound);

    await equipament.save();

    await equipament.load('category');
    return response.status(200).json(equipament);
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
