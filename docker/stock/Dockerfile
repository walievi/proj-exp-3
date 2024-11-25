FROM node:20-alpine

WORKDIR /app

COPY ./docker/stock/.env /tmp/.env

RUN apk add --no-cache bash curl

RUN yarn config set registry https://registry.npmjs.org/

RUN yarn install

COPY docker/stock/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3333

CMD ["entrypoint.sh"]