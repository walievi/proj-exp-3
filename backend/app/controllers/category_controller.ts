import Category from '#models/category'
import { createPostValidator } from '#validators/Category'
import type { HttpContext } from '@adonisjs/core/http'

export default class CategoryController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const categories = await Category.all()

    response.status(200).json(categories)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.body()

    const payload = await createPostValidator.validate(data)

    const categoryCreated = await Category.create({
      name: payload.name,
      description: payload.description,
    })

    response.status(201).json(categoryCreated)
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
