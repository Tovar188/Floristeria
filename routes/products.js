// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Asegúrate de que la ruta sea correcta

// Ruta para obtener todos los productos
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener todos los productos
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 */
router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send('Error al obtener productos');
  }
});

module.exports = router;

