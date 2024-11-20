<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Keycloak Configuration
    |--------------------------------------------------------------------------
    |
    | As configurações para integração com o Keycloak. Esses valores são
    | retirados do arquivo .env para facilitar a manutenção.
    |
    */

    // Nome do Realm do Keycloak
    'realm' => env('KEYCLOAK_REALM', 'master'),

    // Endereço do servidor de autenticação
    'auth_server_address' => env('KEYCLOAK_AUTH_SERVER_ADDRESS', 'localhost'),

    // Porta do servidor de autenticação
    'auth_server_port' => env('KEYCLOAK_AUTH_SERVER_PORT', 8080),

    // URL base do Keycloak
    'auth_server_url' => sprintf(
        'http://%s:%s/realms/%s',
        env('KEYCLOAK_AUTH_SERVER_ADDRESS', 'localhost'),
        env('KEYCLOAK_AUTH_SERVER_PORT', 8080),
        env('KEYCLOAK_REALM', 'master')
    ),

    // Client ID configurado no Keycloak
    'client_id' => env('KEYCLOAK_CLIENT_ID', null),

    // Client Secret configurado no Keycloak
    'client_secret' => env('KEYCLOAK_CLIENT_SECRET', null),

    // Chave pública do Keycloak
    'public_key' => sprintf("", env('KEYCLOAK_PUBLIC_KEY', '')),

    // URLs adicionais do OpenID Connect
    'openid_urls' => [
        'token' => sprintf(
            'http://%s:%s/realms/%s/protocol/openid-connect/token',
            env('KEYCLOAK_AUTH_SERVER_ADDRESS', 'localhost'),
            env('KEYCLOAK_AUTH_SERVER_PORT', 8080),
            env('KEYCLOAK_REALM', 'master')
        ),
        'userinfo' => sprintf(
            'http://%s:%s/realms/%s/protocol/openid-connect/userinfo',
            env('KEYCLOAK_AUTH_SERVER_ADDRESS', 'localhost'),
            env('KEYCLOAK_AUTH_SERVER_PORT', 8080),
            env('KEYCLOAK_REALM', 'master')
        ),
        'logout' => sprintf(
            'http://%s:%s/realms/%s/protocol/openid-connect/logout',
            env('KEYCLOAK_AUTH_SERVER_ADDRESS', 'localhost'),
            env('KEYCLOAK_AUTH_SERVER_PORT', 8080),
            env('KEYCLOAK_REALM', 'master')
        ),
        'certs' => sprintf(
            'http://%s:%s/realms/%s/protocol/openid-connect/certs',
            env('KEYCLOAK_AUTH_SERVER_ADDRESS', 'localhost'),
            env('KEYCLOAK_AUTH_SERVER_PORT', 8080),
            env('KEYCLOAK_REALM', 'master')
        ),
    ],

];
