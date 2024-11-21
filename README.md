Keycloak (gestão de usuário e Roles)
keycloak:8101
user: admin
password: admin

Frontend 
frontend:8000

BFF
host: bff:8000
* autenticação padrão OAuth2

rota /auth
method POST

username: admin ou usuario
password: teste

  admin acesso full
  usuario acesso apenas aos GETs

pegar o token de retorno e submeter no header do consumo das APIs

API autenticada (enviar o Bearer no header) RestFull (GET/POST/PUT/DELETE)
/categories
/people

API não autenticada (apenas para testes, por enquanto) RestFull (GET/POST/PUT/DELETE)
/equipaments
