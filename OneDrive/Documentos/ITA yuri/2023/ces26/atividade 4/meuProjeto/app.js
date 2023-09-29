const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Configuração de storage do Multer
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Para servir arquivos estáticos
app.use(express.static('public'));

// Para processar dados de um formulário enviado via GET
app.get('/formulario', (req, res) => {
  res.send(req.query);
});

// Para realizar upload de arquivos
app.post('/upload', upload.single('arquivo'), (req, res) => {
  res.send('Arquivo enviado com sucesso!');
});

// Para responder a uma requisição AJAX
app.get('/dados', (req, res) => {
  res.json({ mensagem: 'Dados em JSON' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
