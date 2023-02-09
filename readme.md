# API RESTFULL

Essa API RESTFULL foi desenvolvida pelo professor Jorge Aluizio e está disponível na Udemy através do link: https://www.udemy.com/share/103TQG3@_1VKBpoZ97hI0t4Y-nxhYe99glDuCntJI1xCu4-9k1FIlYirkbCSn6sBOTGQp84o/. Ela possui funcionalidades de login, autenticação e cadastro de usuários, bem como cadastro e vendas de produtos.

## Tecnologias utilizadas
- Node.js
- TypeScript
- Express
- JWT
- Multer
- TypeORM
- PostgreSQL
- ESLint
- Prettier
- Redis
## Rotas e requisições
### Login
- Rota: /sessions
- Requisição: POST

Corpo da requisição:

```
{
  "email": "email@dominio.com",
  "password": "senha"
}
```
Resposta:

```
{
  "user": {
    "id": 1,
    "name": "Nome do usuário",
    "email": "email@dominio.com"
  },
  "token": "JWT Token"
}
```
Cadastro de usuários
- Rota: /users
- Requisição: POST

Corpo da requisição:
```
{
  "name": "Nome do usuário",
  "email": "email@dominio.com",
  "password": "senha"
}
```
Resposta:
```
{
  "id": 1,
  "name": "Nome do usuário",
  "email": "email@dominio.com"
}
```
Cadastro de produtos

- Rota: /products
- Requisição: POST
- Corpo da requisição:
```
{
  "name": "Nome do produto",
  "price": 999.99,
  "quantity": 10
}
```
Resposta:
```
{
  "id": 1,
  "name": "Nome do produto",
  "price": 999.99,
  "quantity": 10
}
```
Listagem de produtos
- Rota: /products
- Requisição: GET

Resposta:
```
[  {    "id": 1,    "name": "Nome do produto 1",    "price": 999.99,    "quantity": 10  },  {    "id": 2,    "name": "Nome do produto 2",    "price": 888.88,    "quantity": 20  }]
```
Venda de produtos
- Rota: /products/:id/sales
- Requisição: POST

Resposta:

```
{
"message": "Produto vendido com sucesso!"
}
```
Cadastro de usuários
- Rota: /users
- Requisição: POST

Resposta:

```
{
"message": "Usuário cadastrado com sucesso!"
}
```
Autenticação de usuários
- Rota: /sessions
- Requisição: POST

Resposta:

```
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA0ODcxMjI5fQ.4bh4w0La0LpOkLmEf9rLKjnAjKdzgQFHDKbvzuvZ_Ks"
}
```
