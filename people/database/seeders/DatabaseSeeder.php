<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Patient;
use Illuminate\Database\Seeder;
use App\Models\Person;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Cria 20 pessoas com 3 endereços cada
        Person::factory(20)->hasAddresses(1)->create();

        // Cria 10 funcionários
        Employee::factory(10)->create();

        // Cria 15 pacientes, alguns com responsáveis
        Patient::factory(15)->create();
    }
}
