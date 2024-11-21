<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class KeycloakAuthService
{
    protected $client;
    protected $config;

    public function __construct()
    {
        // Carrega as configurações do arquivo keycloak.php
        $this->config = config('keycloak');

        $this->client = new Client([
            'base_uri' => $this->config['auth_server_url'], // Base URL do Keycloak
            'timeout'  => 10.0, // Timeout opcional
        ]);
    }

    public function getToken($username, $password)
    {
        try {
            $response = $this->client->post($this->config['openid_urls']['token'], [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => $this->config['client_id'],
                    'username' => $username,
                    'password' => $password,
                    'client_secret' => $this->config['client_secret'],
                ],
            ]);

            // Retorna a resposta como array
            return json_decode($response->getBody(), true);
        } catch (RequestException $e) {
            // Trata erros da requisição
            if ($e->hasResponse()) {
                return [
                    'error' => true,
                    'message' => $e->getResponse()->getBody()->getContents(),
                ];
            }

            return [
                'error' => true,
                'message' => 'An error occurred while connecting to the server.',
            ];
        }
    }
}
