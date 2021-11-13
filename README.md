# Processo Seletivo Backend Mercafácil

<h1 align="center">
    <a href="https://mercafacil.com//">🔗 Mercafácil</a>
</h1>
<p align="center">🚀 O problema consiste em receber 1 ou mais contatos de celulares através de uma API Rest e adicioná-los ao banco de dados do cliente Macapá ou do cliente VareJão.</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e o Insomnia para realizar as requisições na api (https://insomnia.rest/download)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/byoliveira/desafio-merca.git

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-merca
$ cd api-macapa

# Instale DB com Docker
$ docker-compose up -d

# Instale as dependências
$ docker-compose up -d "somente uma vez, já é o suficiente para subir as imagens db necessárias"
$ yarn ou yarn install

# Acesse a pasta do projeto no terminal/cmd
$ cd..
$ cd api-varejao

# Instale as dependências
$ yarn ou yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start
$ em ambas das apis  "cd api-macapa" e "cd api-varejao" 

# O servidor inciará na porta:8080 api-macapa - acesse <http://localhost:8080>
# O servidor inciará na porta:8081 api-varejao - acesse <http://localhost:8081>
```


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Insomnia](https://insomnia.rest/)
- [MySQL](https://www.mysql.com/)
- [Postgres](https://www.postgresql.org/)
