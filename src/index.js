const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const postRoutes = require('./routes/postRoutes'); // ← importar as rotas depois de criar o app

const app = express(); // ← esta linha vem antes de usar `app`

app.use(express.json());
app.use('/', postRoutes); // ← agora o app já existe

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar ao MongoDB:', err);
  });
