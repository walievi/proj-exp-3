FROM php:8.2-fpm

# Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    zip \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libmcrypt-dev \
    libpq-dev \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Instale a extensão Redis
RUN pecl install redis && docker-php-ext-enable redis

# Baixe e instale o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

# Defina o diretório de trabalho
WORKDIR /var/www

# Exponha a porta 8000
EXPOSE 8000

# Defina a variável de ambiente para permitir plugins Composer
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copie o script de inicialização para o container
COPY docker/webapp/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Comando para iniciar o servidor do Laravel
CMD ["docker-entrypoint.sh"]