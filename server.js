const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuração para servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Função para calcular a média
function calcularMedia(notas) {
  const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const media = soma / notas.length;
  return media;
}

// Rota POST para receber as notas e calcular a média
app.post('/calcular-media', (req, res) => {
  const { notas } = req.body;
  if (!notas || notas.length === 0) {
    return res.status(400).send({ error: 'Nenhuma nota fornecida.' });
  }
  
  const media = calcularMedia(notas);
  res.send({ media });
});

// Rota para a página principal (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
