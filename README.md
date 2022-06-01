# Mercenaria Api
## Projeto em desenvolvimento

[![N|Solid](https://www.starkdigital.net/wp-content/uploads/2020/02/Node-js.png)](https://nodejs.org/en/)

Api desenvolvida em node.js, feita para uso pessoal do projeto mercearia

- Prático de usar.
- Básica, rápida e objetiva.

## Controladores

- delete
- findByName
- listAll

Desenvolvida por: [Guilherme](https://github.com/sickog0d), [Adriano](https://google.com/)

## Requerimentos
Precisa ter o [Node.js](https://nodejs.org/) na versão mais recente.


## Packages
É necessário instalar os pacotes a seguir, caso a pasta não venha com a node_modules.
```
npm install express mongoose nodemon
```

## Respostas
Ao realizar requisições, será retornado alguma das respostas a seguir, por padrão é configurado a mesma resposta de not found para todos os controladores, vou explicar abaixo.

### status, resposta
404 - Produto não existe, ou não foi possível localiza-lo.
200 - A requisição foi feita.