# Minha Aplicação Pessoal

Esta é uma aplicação pessoal que utiliza React no front-end, Tailwind CSS para estilização e Node.js no back-end, integrado a um banco de dados MySQL. A aplicação consiste em uma página pessoal com um formulário que é conectado ao banco de dados.

## Configuração do Front-end (React + Tailwind CSS)

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes para Node.js)

### Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sua-aplicacao.git
    ```
Navegue até o diretório do front-end:

   ```bash
   cd sua-aplicacao/frontend
```

Instale as dependências:

   ```bash
   npm install
```

Executando o Front-end
   ```bash
   npm start
   ```

O front-end estará acessível em http://localhost:3000.

## Configuração do Back-end (Node.js + MySQL)
Pré-requisitos
Node.js
npm (gerenciador de pacotes para Node.js)
MySQL
Configuração do Banco de Dados
Crie um banco de dados MySQL.
Copie o arquivo .env.example para .env e configure as variáveis de ambiente relacionadas ao banco de dados.
Instalação
Navegue até o diretório do back-end:

   ```bash
   cd sua-aplicacao/backend
```

Instale as dependências:

   ```bash
   npm install
```

Executando o Back-end
   ```bash
   npm start
```

O back-end estará acessível em http://localhost:4000.

Executando Ambos (Front-end e Back-end)
Se desejar executar tanto o front-end quanto o back-end simultaneamente, você pode usar um script para isso. No diretório raiz do projeto, execute:

   ```bash
   npm run dev
   ```

Isso iniciará tanto o front-end quanto o back-end em paralelo.

Contribuindo
Sinta-se à vontade para contribuir com melhorias. Crie um fork do repositório, faça suas alterações e envie um pull request.