import Patrimony from '#models/patrimony'
import Equipament from '#models/equipament'
import { createPostValidator } from '#validators/patrimony'
import type { HttpContext } from '@adonisjs/core/http'

export default class PatrimoniesController {
  /**
   * Display a list of resource
   */
  async index({ response }: HttpContext) {
    const patrimonies = await Patrimony.query().preload('equipament')

    const patrimoniesJson = patrimonies.map((patrimony) => {
      return patrimony.serialize({
        fields: {
          omit: ['description'],
        },
        relations: {
          equipament: {
            fields: ['id', 'model', 'serial_number'],
          },
        },
      })
    })

    response.status(200).json(patrimoniesJson)
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response }: HttpContext) {
    const data = request.body();

    const payload = await createPostValidator.validate(data);

    // Verifica se o equipamento existe
    const equipament = await Equipament.find(payload.equipamentId);
    if (!equipament) {
      return response.status(400).json({ message: 'Equipamento não encontrado.' });
    }

    // Verifica se o código do patrimônio é único
    const patrimonyExists = await Patrimony.findBy('patrimony_code', payload.patrimonyCode);
    if (patrimonyExists) {
      return response.status(400).json({ message: 'Código de patrimônio já existe.' });
    }

    // Cria o patrimônio
    const patrimony = new Patrimony();
    patrimony.patrimonyCode = payload.patrimonyCode;
    patrimony.equipamentId = payload.equipamentId;
    patrimony.description = payload.description;

    await patrimony.save();
    await patrimony.load('equipament');

    response.status(201).json(patrimony);
  }

  /**
   * Show individual record
   */
  async show({ params, response }: HttpContext) {
    const patrimonyId = (params.id);

    const patrimony = await Patrimony.query()
      .where('id', patrimonyId)
      .preload('equipament', (query) => {
        query.select(['id', 'model', 'serial_number']);
      })
      .first();

    if (!patrimony) {
      return response.status(404).json({ message: 'Patrimônio não encontrado.' });
    }

    response.status(200).json(patrimony);
  }
  
   /**
   * Handle form submission for the update action
   */
   async update({ params, request, response }: HttpContext) {
    const patrimonyId = (params.id);
    const data = request.body();

    const patrimony = await Patrimony.find(patrimonyId);
    if (!patrimony) {
      return response.status(404).json({ message: 'Patrimônio não encontrado.' });
    }

    // Verifica se o equipamento existe
    if (data.equipamentId) {
      const equipament = await Equipament.find(data.equipamentId);
      if (!equipament) {
        return response.status(400).json({ message: 'Equipamento não encontrado.' });
      }
      patrimony.equipamentId = data.equipamentId;
    }

    // Atualiza os campos permitidos
    patrimony.patrimonyCode = data.patrimonyCode || patrimony.patrimonyCode;
    patrimony.description = data.description || patrimony.description;

    // Salva as alterações
    await patrimony.save();
    await patrimony.load('equipament');

    response.status(200).json(patrimony);
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
