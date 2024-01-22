<!-- markdownlint-disable MD033 -->

# CoreLab Node.js - Desafio `CRUD Tasks - API`

<div align="center">
   <img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853D?" width="25%"/>
</div>
<br>

<div align="center">
   <a href="https://github.com/pablo-oliveiraDev">
      <img alt="Made by Pablo oliveira" src="https://img.shields.io/badge/made%20by-Pablo-yellow">
   </a>
   <img alt="GitHub Repo Size" src="">
   <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/mgckaled/ignite-nodejs-desafio-tasksAPI">
</div>
<br>

<div align="center">

[**Desafio**](#desafio) &nbsp;&nbsp;**•**&nbsp;&nbsp;
[**Tecnologias**](#tecnologias) &nbsp;&nbsp;**•**&nbsp;&nbsp;
[**Backend-Api**](#) &nbsp;&nbsp;**•**&nbsp;&nbsp;


</div>

## Desafio

Nesse desafio você desenvolverá uma API para realizar o CRUD de suas _tasks_ (tarefas).

A API deve conter as seguintes funcionalidades:

-   Criação de uma _task_
-   Listagem de todas as _tasks_
-   Atualização de uma _task_ pelo `id`
-   Remover uma _task_ pelo `id`
-   Marcar pelo `id` uma _task_ como completa


### Tomada de decisões
Para a resolução do desafio, como solicitado usei o `Node.js` ,banco de dados `Mongodb` até pensei em usar ele em um container porém após analisar seria desnecessário ja que ele tem plataforma em nuvem e ser utilizado em uma api e também pensei em usar o Postgres porém para tarefa seria "usar um canhão para matar uma mosca".
Utilizei tbm o orm prisma que se encaixa muito bem com os dois bancos de dados proposto para o desafio .


### Regras de negócio

Antes das rotas, vamos entender qual a estrutura (propriedades) que uma task deve ter:

-   `id` - Identificador único de cada _task_
-   `title` - Título da _task_
-   `description` - Descrição detalhada da _task_
-   `completed_at` - Data de quando a _task_ foi concluída.
-   `created_at` - Data de quando a _task_ foi criada.
-   `updated_at` - Deve ser sempre alterado para a data de quando a _task_ foi atualizada.

### Rotas

#### `POST - /tasks`

-   Deve ser possível criar uma _task_ no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
-   Ao criar uma _task_, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.

#### `GET - /tasks`

-   Deve ser possível listar todas as tasks salvas no banco de dados.
-   Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`

#### `PUT - /tasks/:id`

-   Deve ser possível atualizar uma _task_ pelo `id`.
-   No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
-   Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
-   Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma _task_ salva no banco de dados.

#### `DELETE - /tasks/:id`

-   Deve ser possível remover uma _task_ pelo `id`.
-   Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma _task_ salva no banco de dados.

##### `PATCH - /tasks/:id/complete`

-   Deve ser possível marcar a _task_ como completa ou não. Isso significa que se a _task_ estiver concluída, deve voltar ao seu estado “normal”.
-   Antes da alteração, deve ser feito uma validação se o `id` pertence a uma _task_ salva no banco de dados.

### Código Comentado

Acesse análises e comentários sobre o código [AQUI](./.github/docs/index.md).

## Tecnologias

-   [`Node.js`](https://nodejs.org/n/)
-   [`Typescript`](https://www.typescriptlang.org/)
-   [`Prisma`](https://www.npmjs.com/package/prisma)
-   [`MongoDB`](https://www.npmjs.com/package/mongodb)



---

<h5 align="center">
 2024 - <a href="https://github.com/pablo-oliveiraDev">Pablo de Oliveira</a>
</h5>
