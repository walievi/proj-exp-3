import { BaseSeeder } from '@adonisjs/lucid/seeders';
import Patrimony from '#models/patrimony';
import Equipament from '#models/equipament';

export default class PatrimonySeeder extends BaseSeeder {
  async run() {
    const equipaments = await Equipament.all();
    if (equipaments.length === 0) {
      console.log('Por favor, insira equipamentos antes de executar este seeder.');
    }

    const patrimonies = [
      {
        patrimony_code: 'P001',
        description: 'Patrimônio associado ao notebook Dell',
        equipamentId: equipaments[0]?.id, // Associado ao primeiro equipamento
      },
      {
        patrimony_code: 'P002',
        description: 'Patrimônio associado ao smartphone Samsung',
        equipamentId: equipaments[1]?.id, // Associado ao segundo equipamento
      },
      {
        patrimony_code: 'P003',
        description: 'Patrimônio associado à impressora HP',
        equipamentId: equipaments[2]?.id, // Associado ao terceiro equipamento
      },
    ];

    // Insere os patrimônios
    for (const patrimony of patrimonies) {
        await Patrimony.firstOrCreate(
          { patrimonyCode: patrimony.patrimony_code }, // Código único do patrimônio
          {
            patrimonyCode: patrimony.patrimony_code,
            description: patrimony.description,
            equipamentId: patrimony.equipamentId,
          }
        );
    }
  }
}
