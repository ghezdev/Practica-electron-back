'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*const producto = new Schema ({
    tipoProducto: String,
    marca: String,
    precioFecha: { 
        precio: Number,
        fecha: Date
    },
    codigoBarra: Number,
    fechaVencimiento: Date,
    descripcion: String
})*/

const producto = new Schema ({
    titulo: String
})

module.exports = mongoose.model('Producto', producto)