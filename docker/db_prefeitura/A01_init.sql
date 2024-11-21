-- Verifica se o banco de dados 'municipes' existe e cria se não existir
SELECT 'CREATE DATABASE municipes'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'municipes')\gexec

-- Verifica se o banco de dados 'keycloak' existe e cria se não existir
SELECT 'CREATE DATABASE keycloak'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'keycloak')\gexec

-- Concede todos os privilégios no banco de dados 'municipes' ao usuário 'postgres'
GRANT ALL PRIVILEGES ON DATABASE municipes TO postgres;

-- Concede todos os privilégios no banco de dados 'keycloak' ao usuário 'postgres'
GRANT ALL PRIVILEGES ON DATABASE keycloak TO postgres;