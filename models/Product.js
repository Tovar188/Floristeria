// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajusta la ruta para que apunte al archivo correcto

// Definición del modelo Product
const Product = sequelize.define('Product', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = Product;

