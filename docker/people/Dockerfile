FROM php:8.2-fpm

# Instalar dependências
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    unzip \
    git

# Instalar extensões PHP
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copiar o código para o container
COPY ./people /var/www

# Definir o diretório de trabalho
WORKDIR /var/www

# Instalar dependências do Laravel
RUN composer install

# Definir permissões para a pasta de cache e logs
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Expor a porta 9000
EXPOSE 9000

# Rodar o PHP-FPM
CMD ["php-fpm"]