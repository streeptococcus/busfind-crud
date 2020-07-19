# API BUSFIND

A API Busfind foi desenvolvida em TypeScript usando principalmente as ferramentas Node.JS e Express. Conta também com o uso de:

## Swagger UI

A ferramenta Swagger UI foi usada para a documentação da API, seu código pode ser encontrado na pasta raiz com o nome de `swagger.json`.

## ESLint e Prettier

A ferramente ESLint foi usada para padronizar e formatar a aplicação com a ajuda do Prettier para a implementação. Seu código pode ser encontrado no arquivo `.eslintrc.json`.

### Outras ferramentas

Além dessas duas ferramentas auxiliares, também foi usado `rimraf`, para excluir a pasta `dist`, `mysql2`, para conectar à base de dados, `morgan`, um logger para identificar requisições feitas na aplicação e `nodemon`, para automatizar o reload da aplicação.

## Link da apresentação

Nesse [vídeo](https://www.youtube.com/) explico mais sobre como a aplicação foi elaborada.

## Inicializando o banco de dados

Na sua máquina, inicialize o MySQL e execute o código encontrado em `/sql/database.mssql`. Tenha certeza que os dados contidos em `database.ts` sejam os mesmos do seu banco, host e senha.

## Instalando Node.JS e outras bibliotecas

Para a aplicação funcionar, você precisa ter o Node.JS instalado em sua máquina e iniciá-lo, dentro do seu projeto, no terminal com o comando `npm init`. Depois de já ter a pasta `node_modules` em seu projeto, é hora de instalar todas as ferramentas citadas acima e suas respectivas versões para a linguagem TypeScript. Você pode conferir as nomenclaturas corretas [aqui](https://www.npmjs.com/).

## Inicializando a aplicação

Para executar a aplicação, primeiro você precisa inicializar o serivdor no seu terminal com o comando:

`npm run dev`

Obs: você pode configurar a porta desejada em `index.ts`

Se achar necessário, você pode converter seu código TypeScript para JavaScript com o comando:

`npm run build`

Para limpar a pasta dist criada, basta usar o comando:

`npm run clean`

##### Observação

Para testagem na documentação, é possível que o Swagger desabilite os campos de path. Para habilitar, clique com o botão direito dentro do campo e clique em `Inspecionar`. No código HTML, apgaue o atributo `disabled` dentro da tag `<input>`.
