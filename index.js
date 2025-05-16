const express = require('express');
const cors = require('cors');
const config = require('./firebase-config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/firebase-config', (req, res) => {
  res.json(config);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
