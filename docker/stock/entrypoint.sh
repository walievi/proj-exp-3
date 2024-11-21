#!/bin/sh
cp /tmp/.env /app/.env
yarn install
node ace migration:run
yarn dev
