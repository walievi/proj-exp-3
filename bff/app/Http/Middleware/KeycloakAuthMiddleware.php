<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class KeycloakAuthMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Verificar se o token Bearer foi enviado
        if (!$token = $request->bearerToken()) {
            return response()->json(['error' => 'Token não fornecido'], 401);
        }

        try {
            // Decodificar e validar o token JWT
            $decodedToken = $this->decodeToken($token);

            // Extrair permissões do token
            $userPermissions = $decodedToken['permissions'] ?? [];

            // Criar permissão necessária com base no método HTTP e no recurso
            $requiredPermission = $this->getPermissionFromRequest($request);

            // Verificar se o usuário possui a permissão necessária
            if (!in_array($requiredPermission, $userPermissions)) {
                return response()->json(['error' => 'Acesso negado: Permissão insuficiente'], 403);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Token inválido ou expirado', 'details' => $e->getMessage()], 401);
        }

        return $next($request);
    }

    private function decodeToken($token)
    {
        $publicKey = config('keycloak.public_key');

        try {
            $decoded = JWT::decode($token, new Key($publicKey, 'RS256'));

            return [
                'permissions' => $this->extractPermissions($decoded),
            ];
        } catch (\Exception $e) {
            throw new \Exception('Erro ao validar o token JWT: ' . $e->getMessage());
        }
    }

    private function extractPermissions($decodedToken)
    {
        $clientId = "your-client-id";

        $clientRoles = $decodedToken->resource_access->{$clientId}->roles ?? [];
        $realmRoles = $decodedToken->realm_access->roles ?? [];

        return array_merge($clientRoles, $realmRoles);
    }

    /**
     * Gera a permissão necessária com base no método HTTP e no recurso da rota.
     *
     * @param  Request  $request
     * @return string
     */
    private function getPermissionFromRequest(Request $request)
    {
        $method = $request->method(); // Exemplo: GET, POST, PUT, DELETE
        $resource = $request->route()->getName(); // Nome do recurso (ex: "people.index")

        // Extrair o recurso base (antes do ".index" ou similar)
        $resourceBase = explode('.', $resource)[0];

        // Combinar o recurso e o método HTTP para gerar a permissão
        return "{$resourceBase}-{$method}";
    }
}
