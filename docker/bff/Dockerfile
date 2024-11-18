# Use a imagem oficial do PHP com Swoole como base
FROM phpswoole/swoole:php8.3-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Instale extensões e dependências necessárias
RUN apk add --no-cache \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install zip pcntl

# Instale o Composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# Copie os arquivos do projeto para o container
COPY docker/bff/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Exponha a porta que o Swoole irá usar
EXPOSE 8000

# Comando para iniciar o servidor Swoole
CMD ["entrypoint.sh"]