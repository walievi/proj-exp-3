<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\KeycloakAuthService;
class AuthController extends Controller
{
     protected $keycloakAuthService;

    public function __construct(KeycloakAuthService $keycloakAuthService)
    {
        $this->keycloakAuthService = $keycloakAuthService;
    }

    public function getToken(Request $request)
    {
        // Obtém username e password da request
        $username = $request->input('username');
        $password = $request->input('password');

        // Chama a service para obter o token
        $response = $this->keycloakAuthService->getToken($username, $password);

        // Retorna a resposta ao cliente
        return response()->json($response);
    }
}
