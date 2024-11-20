<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nome completo
            $table->string('cpf', 11)->unique(); // CPF
            $table->string('rg', 20)->nullable(); // RG
            $table->date('birth_date'); // Data de nascimento
            $table->string('email')->unique(); // E-mail
            $table->string('phone', 15)->nullable(); // Telefone
            $table->foreignId('mother_id')->nullable()->constrained('people'); // Mãe
            $table->foreignId('father_id')->nullable()->constrained('people'); // Pai
            $table->string('father_name')->nullable(); // Nome do pai
            $table->boolean('is_disabled')->default(false); // Indicação de deficiência
            $table->string('card_sus')->nullable(); // Número do cartão sus
            $table->string('education_level')->nullable(); // Nível de escolaridade
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('people');
    }
};
