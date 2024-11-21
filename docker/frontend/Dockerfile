# Use a imagem do Node com Alpine como base
FROM node:lts-alpine

RUN yarn config set registry https://registry.npmjs.org/

COPY docker/frontend/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

EXPOSE 5173

CMD ["entrypoint.sh"]