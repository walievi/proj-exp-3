#!/bin/bash

set -e

# Função para verificar se o banco de dados está vazio
is_db_empty() {
  mysql -u root -e "USE ${MYSQL_DATABASE}; SHOW TABLES;" | grep -v Tables_in
}

# Esperar o MySQL iniciar
echo "Aguardando MySQL iniciar..."
until mysql -u root -e "status"; do
  sleep 1
done

# Verificar se o banco de dados existe e criar se necessário
if ! mysql -u root -e "USE ${MYSQL_DATABASE}"; then
  echo "Banco de dados ${MYSQL_DATABASE} não existe. Criando banco de dados..."
  mysql -u root -e "CREATE DATABASE ${MYSQL_DATABASE};"
fi

# Verificar se o banco de dados está vazio e importar o dump se estiver vazio
if [ -z "$(is_db_empty)" ]; then
  echo "Banco de dados ${MYSQL_DATABASE} está vazio. Importando banco default..."
  mysql -u root "${MYSQL_DATABASE}" < "/tmp/default.sql"
else
  echo "Banco de dados ${MYSQL_DATABASE} não está vazio. Nenhuma importação necessária."
fi