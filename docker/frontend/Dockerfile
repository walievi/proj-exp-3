# Use a imagem do Node com Alpine como base
FROM node:lts-alpine

# Configure Yarn Repo
RUN yarn config set registry https://registry.npmjs.org/

# Defina o diretório de trabalho no container
WORKDIR /app

# Exponha a porta que a aplicação vai rodar
EXPOSE 5173

# Comando para iniciar o servidor do Laravel
CMD ["yarn", "dev", "--host"]