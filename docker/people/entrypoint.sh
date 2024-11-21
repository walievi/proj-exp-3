#!/bin/sh
cp /tmp/.env /var/www/html/.env
chmod -R 777 storage bootstrap/cache
composer install --no-interaction --no-progress --no-suggest
php artisan key:generate
php artisan serve --host=0.0.0.0