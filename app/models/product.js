const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    preci: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Ninos', 'Hogar', 'Entretenimiento']
    },
    stock: {
        type: Number,
        default: 10
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const product = mongoose.model('product', productSchema);
module.exports = product;