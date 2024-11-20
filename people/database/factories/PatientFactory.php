<?php

namespace Database\Factories;

use App\Models\Patient;
use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    protected $model = Patient::class;

    public function definition()
    {
        return [
            'person_id' => Person::factory(),
            'responsible_id' => $this->faker->boolean(20) ? Person::factory() : null, // 70% de chance de ter um responsável
        ];
    }
}
