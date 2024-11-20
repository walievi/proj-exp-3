import Category from '#models/category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class CategorySeeder extends BaseSeeder {
    public async run() {
      const categories = [
        {
          name: 'Cama',
          description: ' ',
        },
        {
          name: 'Muleta',
          description: ' ',
        },
        {
          name: 'Cadeira de Rodas',
          description: '',
        },
        {
            name: 'Tanque de Oxigênio',
            description: '',
          },
      ];
  
      for (const category of categories) {
        await Category.firstOrCreate({ name: category.name }, category);
      }
    }
  }
