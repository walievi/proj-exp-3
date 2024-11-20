FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache bash curl

RUN yarn config set registry https://registry.npmjs.org/

COPY docker/stock/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 3333

CMD ["entrypoint.sh"]