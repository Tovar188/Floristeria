// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Usa la versión OpenAPI 3.0.0
    info: {
      title: 'Floristería API',
      description: 'API para catálogo y pedidos de una floristería',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL del servidor donde se ejecuta la API
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta donde están las rutas de la API
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerDocs };
