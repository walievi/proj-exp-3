<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\Person;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    protected $model = Employee::class;

    public function definition()
    {
        return [
            'person_id' => Person::factory(),
            'position' => $this->faker->jobTitle,
            'hiring_date' => $this->faker->date(),
        ];
    }
}
