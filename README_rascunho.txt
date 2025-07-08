# Jogo da Velha - Backend (.NET + PostgreSQL)

Este projeto é o **back-end** de um sistema simples de **Jogo da Velha**, desenvolvido como parte de um **teste técnico para vaga de Desenvolvedor Júnior**. Ele expõe uma API RESTful para registro e consulta de partidas finalizadas, com persistência em banco de dados relacional PostgreSQL.

## 🛠 Tecnologias Utilizadas

- [.NET 8](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [ASP.NET Core Web API](https://learn.microsoft.com/en-us/aspnet/core/web-api/)
- [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/)
- [PostgreSQL](https://www.postgresql.org/)
- [Swagger (Swashbuckle)](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)

---

## 📋 Funcionalidades Implementadas

### 📌 Registro de partidas
- Endpoint: `POST /api/Resultados`
- Permite registrar o vencedor de uma partida.
- Aceita apenas os valores `X` ou `O` como `vencedor`.
- O campo `dataHora` é atribuído automaticamente no momento do registro (UTC).

**Exemplo de request:**
```json
{
  "vencedor": "X"
}


📌 Consulta dos 10 últimos vencedores
Endpoint: GET /api/Resultados/ultimos-dez-vencedores

Retorna os últimos 10 registros de partidas com vencedor definido (X ou O).

Empates ("E") são armazenados, mas excluídos deste retorno.

Exemplo de resposta:

json
Copiar
Editar
[
  {
    "id": 1,
    "vencedor": "O",
    "dataHora": "2025-07-08T03:22:10.78587Z"
  },
  ...
]
🧱 Estrutura da API
Controllers/ResultadosController.cs: Lida com os endpoints da API.

Models/Resultado.cs: Representa a entidade persistida no banco.

DTOs/ResultadoRequestDTO.cs: Payload para criar resultados.

DTOs/ResultadoResponseDTO.cs: Estrutura retornada ao cliente.

Data/AppDbContext.cs: Configuração do EF Core e DbSet da entidade.

Migrations/: Migração inicial criada com dotnet ef migrations add InitialCreate.

🔧 Como executar localmente
Pré-requisitos
.NET 8 SDK

PostgreSQL instalado e rodando na porta 5433

DBeaver (opcional) para gerenciamento visual do banco

1. Clonar o repositório
bash
Copiar
Editar
git clone https://github.com/seuusuario/jogo-da-velha-backend.git
cd jogo-da-velha-backend/backend

2. Configurar a connection string
Edite o arquivo appsettings.json com suas credenciais do PostgreSQL:

json
Copiar
Editar
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=localhost;Port=5433;Database=jogo_velha;Username=postgres;Password=1234"
  }
}

3.🐳 Executando com Docker
O projeto já inclui um docker-compose.yml configurado para subir um container PostgreSQL na porta 5433.

Como usar:
Certifique-se de que o Docker está instalado e em execução.

Na raiz do projeto (TestePasquali/), execute:

bash
Copiar
Editar
docker-compose up -d
Verifique se a connection string em backend/appsettings.json está configurada assim:

json
Copiar
Editar
"DefaultConnection": "Host=localhost;Port=5433;Database=jogo_velha;Username=postgres;Password=1234"
Acesse a pasta backend/ e execute:

bash
Copiar
Editar
dotnet ef database update
dotnet run
A API estará disponível em: http://localhost:5052

4. Rodar as migrations
bash
Copiar
Editar
dotnet ef database update


5. Executar a aplicação
bash
Copiar
Editar
dotnet run
A aplicação iniciará em: http://localhost:5052

📑 Swagger (Documentação Interativa)
Disponível em: http://localhost:5052/swagger

🧪 Testes
Nenhum teste automatizado foi implementado. O escopo e simplicidade da regra de negócio (inserção + consulta simples) permitiu validação direta via Swagger.

🗂 Estrutura de Pastas
mathematica
Copiar
Editar
backend/
│
├── Controllers/
├── Models/
├── DTOs/
├── Data/
├── Migrations/
├── Properties/
│
├── appsettings.json
├── Program.cs
└── backend.csproj
📌 Observações Finais
A aplicação está configurada para registrar e consultar partidas no horário UTC.

Empates são registrados no banco (como "E") mas não são retornados nos últimos vencedores.