'use strict'

const morgan = require('morgan')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

// Setting MongoDB
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.get('/api/', (req, res) => { res.send('Inicio') })
app.use('/api/productos', require('./routes/productos.js'))


module.exports = { app, mongoose }