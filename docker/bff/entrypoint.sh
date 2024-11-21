#!/bin/sh
cp /tmp/.env /app/.env
chmod -R 777 storage bootstrap/cache
composer install --no-interaction --no-progress --no-suggest
php artisan key:generate
php artisan octane:start --host=0.0.0.0 --port=8000 --workers=8 --max-requests=1000