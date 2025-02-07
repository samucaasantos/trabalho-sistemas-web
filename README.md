# 📜 MATC82 - Trabalho final

## O que é

Projeto desenvolvido por Fernando Costa, Samuel Santos e Antônio Couto para a disciplina MATC82 com a Professora Laíse Cavalcante no semestre de 2024.2 utilizando a linguagem Typescript, o framework Next.js e o Neon serverless como banco de dados.

Consiste de aplicação full stack para fornecer um exemplo real de implementação dos conceitos e técnicas trabalhadas na matéria, como:
- Serviço web front end, envolvendo a interface e experiência do usuário com imagens, formulários, carrosséis e demais partes interativas construídas usando HTML 5, CSS 3 e Javascript
- Serviço web back end, envolvendo a lógica de tratamento dos dados manipulados pelo usuário (como revalidação de entradas enviadas pelo front end), configuração, integração e instanciação do banco de dados serverless e comunicação com o mesmo
- Serviço de banco de dados serverless para armazenagem, consulta e manipulação das informações coletadas durante o uso do sistema

O painel de administração do banco de dado Postgres (acessível em https://console.neon.tech/app/projects/billowing-meadow-32420933/branches/br-green-smoke-a8ejb68r/tables?database=neondb) facilita a visualização das operações de interação com o sistema.

## API RESTful

Esta aplicação instrumentaliza uma API RESTful para manipular um banco de dados PostgreSQL que guarda as informações de Leads em potencial enviadas através de formulários

## Como rodar este projeto localmente

1. Instale as dependências necessárias

| Dependência | Fonte |
|-------------|-------|
| git | https://git-scm.com/book/en/v2/Getting-Started-Installing-Git |
| VSCode | https://code.visualstudio.com |
| PNPM | https://pnpm.io/pt/installation |

2. Clone o projeto e acesse o diretório criado

``` shell
git clone git@github.com:samucaasantos/trabalho-sistemas-web.git && cd web-page/
```

3. Copie o arquivo .env-example para um arquivo denominado .env

``` shell
cp .env-example .env
```

4. Entre em contato com os membros do grupo para obter a URL de conexão com o Neon e atualize o arquivo .env de acordo

5. Instale as dependências do projeto

``` shell
pnpm install
```

6. Execute o comando de execução

``` shell
pnpm dev
```

7. Visite http://localhost:3000
