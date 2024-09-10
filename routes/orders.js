const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// Agrega rutas para 'update' y 'delete'

module.exports = router;
