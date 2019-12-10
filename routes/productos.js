'use strict'

const express = require('express')
const router = express.Router()

const Producto = require('../models/producto.js')

router.get('/', async (req, res) =>
{
    const productos = await Producto.find()
    res.json(productos)
    console.log('Mostrando productos!')
})

router.post('/add', async (req, res) =>
{
    const nuevoProducto = new Producto(req.body)
    await nuevoProducto.save();
    console.log('\nNuevo producto agregado!')
    console.log(nuevoProducto)
})

module.exports = router;