<?php

namespace Database\Factories;

use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    public function definition()
    {
        return [
            'person_id' => Person::factory(), // Associa com um Person
            'street' => $this->faker->streetName,
            'number' => $this->faker->numerify('###'), // Número com até 10 caracteres
            'complement' => $this->faker->optional()->secondaryAddress, // Complemento opcional
            'neighborhood' => $this->faker->citySuffix, // Bairro
            'city' => $this->faker->city, // Cidade
            'state' => $this->faker->stateAbbr, // Sigla do estado (2 letras)
            'zip_code' => $this->faker->numerify('########'), // CEP com 8 dígitos
        ];
    }
}
