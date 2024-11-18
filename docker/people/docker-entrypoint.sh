#!/bin/sh

echo "Instalando dependências do Composer..."
composer install
echo "Composer install executado!"

# Copia o .env.sample para .env
cp /var/www/.env.example /var/www/.env

update_env_var() {
    local key=$1
    local value=$(eval echo \$$key)

    if [ -n "$value" ]; then
        sed -i "s|$key=.*|$key=$value|" /var/www/.env
        echo "Variável $key definida!"
    else
        echo "A variável $key não está definida ou está vazia."
    fi
}

update_env_var "APP_ENV"
update_env_var "APP_DEBUG"
update_env_var "DB_CONNECTION"
update_env_var "DB_HOST"
update_env_var "DB_PORT"
update_env_var "DB_DATABASE"
update_env_var "DB_USERNAME"
update_env_var "DB_PASSWORD"
update_env_var "REDIS_HOST"
update_env_var "MEMCACHED_HOST"
update_env_var "REDIS_PORT"
update_env_var "BROADCAST_DRIVER"
update_env_var "CACHE_DRIVER"
update_env_var "QUEUE_CONNECTION"
update_env_var "SESSION_DRIVER"
update_env_var "WEBSOCKETS_URL"
update_env_var "WEBSOCKETS_REPLICATION_MODE"
update_env_var "KEYCLOACK_ENDPOINT"
update_env_var "KEYCLOACK_PUBLIC_KEY"
update_env_var "KEYCLOACK_SECRET"
update_env_var "KEYCLOACK_SECRET_ADMIN"
update_env_var "AWS_ACCESS_KEY_ID"
update_env_var "AWS_SECRET_ACCESS_KEY"
update_env_var "AWS_DEFAULT_REGION"
update_env_var "AWS_BUCKET"
update_env_var "AWS_ENDPOINT"


# Tempo máximo para tentar (em segundos)
max_attempts=20  # 5 minutos / 15 segundos
attempts=0

# Espera até que o arquivo autoload.php exista ou até atingir o limite de tentativas
while [ ! -f /var/www/vendor/autoload.php ]; do
    if [ $attempts -ge $max_attempts ]; then
        echo "Arquivo /var/www/vendor/autoload.php não encontrado após 5 minutos. Saindo."
        exit 1
    fi
    echo "Aguardando Composer... Tentativa $((attempts + 1)) de $max_attempts."
    sleep 15
    attempts=$((attempts + 1))
done

echo "Concluído processo do composer."


# Tempo máximo para verificar a conexão com o DB
db_max_attempts=20  # 5 minutos / 15 segundos
db_attempts=0

# Espera até que o banco de dados esteja acessível e a tabela migrations exista
while true; do
    if [ $db_attempts -ge $db_max_attempts ]; then
        echo "Banco de dados não acessível após 5 minutos. Saindo."
        exit 1
    fi

    # Verifica se a tabela migrations existe usando o comando do Artisan
    if php artisan migrate:status > /dev/null 2>&1; then
        echo "Banco de dados acessível e tabela migrations encontrada!"
        break
    else
        echo "Aguardando banco de dados... Tentativa $((db_attempts + 1)) de $db_max_attempts."
    fi

    sleep 15
    db_attempts=$((db_attempts + 1))
done


# Tempo máximo para tentar (em segundos)
max_attempts=20  # 5 minutos / 15 segundos
attempts=0

# Espera até que o arquivo autoload.php exista ou até atingir o limite de tentativas
while [ ! -f /var/www/public/mix-manifest.json ]; do
    if [ $attempts -ge $max_attempts ]; then
        echo "Falha no processo do yarn run watch. Saindo."
        exit 1
    fi
    echo "Aguardando yarn run watch... Tentativa $((attempts + 1)) de $max_attempts."
    sleep 15
    attempts=$((attempts + 1))
done

echo "Pacotes de front instalados com sucesso."



# Inicia o servidor Laravel
php artisan serve --host=0.0.0.0 --port=8000
