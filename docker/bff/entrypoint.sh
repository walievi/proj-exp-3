#!/bin/sh
chmod -R 777 storage bootstrap/cache
composer install --no-interaction --no-progress --no-suggest
php artisan octane:start --host=0.0.0.0