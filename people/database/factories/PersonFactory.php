<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class PersonFactory extends Factory
{
    protected $model = Person::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name, // Nome completo
            'cpf' => $this->faker->unique()->numerify('###########'), // CPF com 11 dígitos
            'rg' => $this->faker->optional()->numerify('###########'), // RG com até 20 caracteres
            'birth_date' => $this->faker->date(), // Data de nascimento
            'email' => $this->faker->unique()->safeEmail, // E-mail único
            'phone' => $this->faker->optional()->numerify('(##) #####-####'), // Telefone
            'mother_id' => $this->faker->boolean(90) ? Person::factory() : null, // 50% chance de ter mãe
            'father_id' => $this->faker->boolean(60) ? Person::factory() : null, // 50% chance de ter pai
            'father_name' => $this->faker->optional()->name('male'), // Nome do pai (se necessário)
            'is_disabled' => $this->faker->boolean(10), // 10% de chance de ser true
            'card_sus' => $this->faker->optional()->numerify('##############'), // Número do cartão SUS
            'education_level' => $this->faker->optional()->randomElement([
                'Primary', 'Secondary', 'Higher', 'Postgraduate',
            ]), // Nível de escolaridade
        ];
    }
}
