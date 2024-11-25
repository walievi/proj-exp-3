# Use a imagem do Node com Alpine como base
FROM node:lts-alpine

WORKDIR /app

RUN yarn config set registry https://registry.npmjs.org/

COPY ./frontend/app /app

RUN yarn install

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]