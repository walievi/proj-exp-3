#!/bin/sh
cp /tmp/.env /app/.env
yarn install
node ace migration:run
node ace db:seed
yarn dev
