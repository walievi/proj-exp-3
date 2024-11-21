<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePersonRequest extends FormRequest
{
    /**
     * Autoriza a requisição
     */
    public function authorize()
    {
        return true; // Alterar se precisar de permissões específicas
    }

    /**
     * Regras de validação
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:people,email',
            'password' => 'required|string|min:6', // Remover caso não seja necessário no update
        ];
    }
}
