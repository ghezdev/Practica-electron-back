'use strict';

const mongoose = require('../config');
const Schema = mongoose.Schema;

export default {
    productoSchema: new Schema ({
        idProducto: Schema.Types.ObjectId,
        tipoProducto: String,
        marca: String,
        precioFecha: { 
            precio: Number,
            fecha: Date
        },
        codigoBarra: Number,
        fechaVencimiento: Date,
        descripcion: String
    })
};