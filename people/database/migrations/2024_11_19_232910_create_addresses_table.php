<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('person_id')->constrained()->onDelete('cascade');
            $table->enum('type', ['home', 'work', 'other'])->default('home'); // Tipo de endereço
            $table->string('street'); // Rua
            $table->string('number', 10); // Número
            $table->string('complement')->nullable(); // Complemento
            $table->string('neighborhood'); // Bairro
            $table->string('city'); // Cidade
            $table->string('state', 2); // Estado (sigla)
            $table->string('zip_code', 8); // CEP
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
