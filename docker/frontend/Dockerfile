# Use a imagem do Node com Alpine como base
FROM node:lts-alpine

# Configure Yarn Repo
RUN yarn config set registry https://registry.npmjs.org/

# Defina o diretório de trabalho no container
WORKDIR /app

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Copie o script de inicialização para o container
COPY docker/frontend/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Comando para iniciar o servidor do Laravel
CMD ["docker-entrypoint.sh"]