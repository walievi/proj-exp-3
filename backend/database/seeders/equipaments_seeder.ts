import { BaseSeeder } from '@adonisjs/lucid/seeders';
import Equipament from '#models/equipament';
import Category from '#models/category';

export default class EquipamentSeeder extends BaseSeeder {
  public async run() {
    // Certifique-se de que as categorias já existam no banco
    const categories = await Category.all();
    if (categories.length === 0) {
      console.log('Por favor, insira categorias antes de executar este seeder.');
      return;
    }

    const equipments = [
      {
        model: 'Notebook Dell Inspiron',
        manufacturer: 'Dell',
        serial_number: 'SN1234567890',
        description: 'Notebook para uso corporativo',
        categoryId: categories[0].id, // Usando a primeira categoria como exemplo
      },
      {
        model: 'Smartphone Samsung Galaxy',
        manufacturer: 'Samsung',
        serial_number: 'SN0987654321',
        description: 'Smartphone com câmera de alta resolução',
        categoryId: categories[1]?.id || categories[0].id, // Usando a segunda ou primeira categoria
      },
      {
        model: 'Impressora HP LaserJet',
        manufacturer: 'HP',
        serial_number: 'SN1122334455',
        description: 'Impressora a laser de alta velocidade',
        categoryId: categories[2]?.id || categories[0].id, // Usando a terceira ou primeira categoria
      },
    ];

    for (const equipment of equipments) {
      await Equipament.firstOrCreate(
        { serialNumber: equipment.serial_number },  // Usando serial_number como chave única
        {
          model: equipment.model,
          manufacturer: equipment.manufacturer,
          serialNumber: equipment.serial_number,
          description: equipment.description,
          categoryId: equipment.categoryId, // Usando category_id conforme a migration
        }
      );
    }
  }
}
