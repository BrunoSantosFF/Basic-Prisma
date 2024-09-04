# Projeto Prisma com TypeScript

Este projeto demonstra como utilizar o Prisma Client com um banco de dados PostgreSQL em um ambiente Node.js utilizando TypeScript. O código implementa operações CRUD para usuários e também lida com relações entre os modelos `User`, `Profile` e `Post`.

O código demonstra como criar, ler, atualizar e remover informações do banco de dados, que podem ser visualizadas com o Railway. É uma implementação básica para ter uma noção inicial de como utilizar o Prisma.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js (versão 14 ou superior)
- PostgreSQL
- Yarn ou npm

## Configuração do Ambiente

1. **Clonar o Repositório**
2. **Instalar Dependências:**
```bash
  npm install
```
3. **Configurar o Banco de Dados:**
```env
  DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_do_banco"
```
4. **Migrações:**
```bash
  npx prisma migrate dev --name init
```




