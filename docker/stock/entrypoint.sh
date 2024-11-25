#!/bin/sh
cp /tmp/.env /app/.env
node ace migration:run
node ace db:seed
yarn dev
