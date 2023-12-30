// index.js

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
// Permitir todas as origens (substitua '*' pelo seu domínio real em produção)
app.use(cors());
const port = 3000; // Escolha a porta que desejar

app.use(express.json());

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    password: 'HH5C6DF2dg54fHcc66hBhGhB4bafc1G6',
    database: 'railway',
    port: 15357,
    connectTimeout: 60000, // 60 segundos (ou ajuste conforme necessário)
  });  

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Seu servidor está rodando!');
});

// Rota para lidar com o formulário
app.post('/api/form', (req, res) => {
  const { nome, email, mensagem } = req.body; // Dados do formulário
  console.log('nome',nome,' email',email,' mensagem',mensagem);
  // Inserir dados no banco de dados
  const sql = 'INSERT INTO Contato (nome, email, mensagem) VALUES (?, ?, ?)';
  connection.query(sql, [nome, email, mensagem], (error, results) => {
    if (error) {
      console.error('Erro ao inserir dados no banco de dados:', error);
      res.json({ success: false, message: 'Erro ao enviar o formulário.' });
    } else {
      console.log('Dados inseridos com sucesso no banco de dados:', results);
      res.json({ success: true, message: 'Formulário enviado com sucesso!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
