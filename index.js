const express = require('express');
const cors = require('cors');
const config = require('./firebase-config');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Ruta raíz para confirmar que el servidor responde
app.get('/', (req, res) => {
  res.send('Servidor corriendo correctamente');
});

// Ruta para obtener la configuración de Firebase
app.get('/firebase-config', (req, res) => {
  res.json(config);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
