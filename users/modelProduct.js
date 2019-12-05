'use strict';

const mongoose = require('../config');
const { productoSchema } = require('./schemas');

export default {
    User: mongoose.model('producto', productoSchema)
};