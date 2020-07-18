# API BUSFIND

A API Busfind foi desenvolvida em TypeScript usando principalmente as ferramentas Node.js e Express. Conta também com o uso de:

# Swagger UI

A ferramenta Swagger UI foi usada para a documentação da API, seu código pode ser encontrado na pasta raiz com o nome de `swagger.json`.

# ESLint

A ferramente ESLint foi usada para padronizar e formatar a aplicação. Seu código pode ser encontrado no arquivo `.eslintrc.json`.

Além dessas duas ferramentas auxiliares, também foi usado `rimraf`, para excluir a pasta `dist`, `mysql2`, para conectar à base de dados, `morgan`, um logger para identificar requisições feitas na aplicação e `nodemon`, para automatizar o reload da aplicação.

# Inicializando a aplicação

Para inicializar a aplicação, primeiro você pricisa inicializar o serivdor no seu terminal com o comando:

`npm run dev`

Se achar necessário, você pode converter seu código TypeScript para JavaScript com o comando:

`npm run build`

Para limpar a pasta dist criada, basta usar o comando:

`npm run clean`
