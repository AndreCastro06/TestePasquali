# Teste Prático Desenvolvedor Júnior (Pasquali)

Permite jogar **Jogo da Velha** via interface web e registra o resultado da partida (`X`, `O` ou empate) em um banco de dados **PostgreSQL**.  
Também exibe os **10 últimos vencedores** (excluindo empates) consumindo os dados via API REST.

🧱 Estrutura do Repositório

TestePasquali/
├── frontend/               # Aplicação Angular Standalone (pasta jogo-ui)
├── backend/                # API ASP.NET Core (.NET 8)
│   ├── docker-compose.yml  # Infraestrutura do banco PostgreSQL
│   ├── init.sql            # Script de criação e povoamento da tabela
│   └── ...
└── README.md               # Instruções de execução (este arquivo)

⚙️ Tecnologias Utilizadas

🖥️ Front-end (Angular 17+)

Angular Standalone Components

TypeScript

SCSS

🔙 Back-end (.NET 8)

ASP.NET Core Web API

Entity Framework Core

PostgreSQL

Swagger (Swashbuckle)

🐳 Infraestrutura

Docker + docker-compose

Volume persistente

Script automático de criação da tabela e inserção de dados (init.sql)

🎮 Funcionalidades

Jogo da Velha com interação entre dois jogadores locais

Modal exibindo o resultado da partida (Player 1 X, Player 2 O ou empate)

Registro do resultado no banco via POST /api/Resultados

Consulta dos 10 últimos vencedores via GET /api/Resultados/ultimos-dez-vencedores

Placar acumulado no front-end

Dados iniciais populados via script SQL (caso rode via Docker)

🚀 Como Rodar o Projeto

1. Clonar o repositório

git clone https://github.com/SeuUsuario/TestePasquali.git
cd TestePasquali

2. Subir o banco de dados com Docker

cd backend
docker-compose up -d

📌 Isso criará o banco jogo_velha, a tabela Resultados e a popula com dados do init.sql.

3. Rodar o back-end (.NET)

cd backend
dotnet run

Acesse: http://localhost:5052/swagger

4. Rodar o front-end (Angular)

cd frontend/jogo-ui
npm install
ng serve

Acesse: http://localhost:4200

📧 Endpoints da API

Método

Rota

Descrição

POST

/api/Resultados

Registra o vencedor ou empate da partida

GET

/api/Resultados/ultimos-dez-vencedores

Lista os 10 últimos vencedores (exclui empates)

📝 Observações

A aplicação foi estruturada com foco em simplicidade, clareza e separação entre front-end e back-end.

O uso de Docker não é exigido no enunciado, mas foi adotado como diferencial técnico para simplificar a execução e garantir reprodutibilidade do ambiente.

O script init.sql é montado automaticamente no container e executado na primeira inicialização, criando a tabela Resultados com dados de exemplo.

Toda a comunicação com o banco de dados é feita exclusivamente via container PostgreSQL. Nenhuma instância local do PostgreSQL é necessária.


🧰 Autor

Desenvolvido por André Castro 
LinkedIn : www.linkedin.com/in/andrecastrodev07
 GitHub :  www.github.com/AndreCastro06