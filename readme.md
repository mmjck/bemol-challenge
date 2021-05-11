# Desafio BemolDigital

Desafio do processo seletivo da Bemol Digital, se trata da criação de uma featura
para cadastro de usuários

Os campos usados no formulário são:

- Nome completo
- CPF
- E-mail
- Endereço

## Requerimentos

- Docker

## Instruções de execução

1. Na raiz do projeto, digitar o seguinte comando no terminal:

```
      docker-compose build && docker-compose up
```

2. Acessar localhost:3000 ( Porta da aplicação Front-end)

## Escolhas

- Node.js :
  Ultilizei Node.js em alguns projetos. É flexível e de rápido desenvolvimento que eu conheço e que estava no meu alcance devido experiências.

- MongoDB :
  Como SGBD usei mongo por uma questão de opção mesmo.

- Docker :
  Mais fácil para outras pessoas utilizarem e testarem essa aplicação.

## Api

### Descrição

Esta api foi desenvolvida com o simples propósito de cadastrar um novo usuário

### Funcionamento

Seu funcionamento se da através de primeiramente uma conexão com banco de dados, e em seguida, a disponibilidade do endpoint "users/register/" que recebe um post

Envia como retorno para o front:
Sucesso : OK
Warning: Caso haja um cadastro de um usuário igual
Erro : Caso contrário será fornecido um json com a mensagem de erro.

#### Tecnologias ultilizadas

- Backend
  - Node.js
    - Express
    - CORS
    - mongoose
- SGBD
  - MongoDB

## Aplicação frontend

### Descrição

A aplicação frontend envia via post os dados para serem cadastrados no banco de dados.

#### Tecnologias ultilizadas

- ReactJs

Exemplo de uso :

```
url : '/users/register'
RequestType : post
headers : { "Content-Type" : "application/json" }
Request Payload : {
    address: {
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
        complemento: ""
    },
    cep: "",
    cpf: "",
    email: "",
    fullName: ""
},
```
