// index.js
const express = require('express');
const sequelize = require('./config/database'); // Conexión a la base de datos
const productRoutes = require('./routes/products');
const { swaggerUi, swaggerDocs } = require('./swagger');

const app = express();
const PORT = 3000;

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());

// Rutas
app.use('/api', productRoutes);

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Sincronización con la base de datos y arranque del servidor
sequelize.sync().then(() => {
  console.log('Conectado a la base de datos MySQL');
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
}).catch(err => console.error('No se pudo conectar a la base de datos:', err));
