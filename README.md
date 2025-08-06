Blog API para Professores – Fase 2 (Tech Challenge FIAP)
Esta aplicação é uma API REST desenvolvida com Node.js, Express e MongoDB. Ela permite que professores da rede pública criem e gerenciem postagens de blog.

Tecnologias utilizadas
Node.js
Express
MongoDB + Mongoose
Docker + Docker Compose
Jest + Supertest
GitHub Actions (CI/CD)

Estrutura do Projeto
fase2-blog/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── tests/
│   └── post.test.js
├── .env
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
└── README.md

Instalação local (sem Docker)
Clone o repositório:
git clone https://github.com/seu-usuario/fase2-blog.git
cd fase2-blog

Instale as dependências:
npm install

Crie um arquivo .env:
PORT=3000
MONGO_URI=mongodb://localhost:27017/fase2blog

Inicie o MongoDB local e rode:
npm run dev

Rodando com Docker (recomendado)
Certifique-se de que você tem o Docker Desktop instalado.
Rode os containers:
docker-compose up --build
A API estará disponível em: http://localhost:3000/posts

Testes automatizados
Rode os testes com:
npm test
Isso gerará:
Validação dos endpoints principais
Relatório de cobertura mínimo de 20%

CI/CD com GitHub Actions
Sempre que houver push ou pull request na branch main:
Os testes serão executados automaticamente no GitHub Actions
Banco MongoDB rodará em container na cloud
Cobertura e status aparecerão na aba "Actions"
Workflow configurado em: .github/workflows/test.yml

Endpoints da API
Método	Rota	Descrição
GET	/posts	Lista todos os posts
GET	/posts/:id	Busca um post por ID
GET	/posts/search?q=xxx	Busca por palavra-chave
POST	/posts	Cria novo post
PUT	/posts/:id	Atualiza um post
DELETE	/posts/:id	Deleta um post

Corpo do POST/PUT:
json
{
  "titulo": "Título do post",
  "conteudo": "Conteúdo completo",
  "autor": "Nome do professor"
}

Autor
Projeto desenvolvido por Cristovam Nunes Alves como parte da Fase 2 do Tech Challenge da FIAP.
