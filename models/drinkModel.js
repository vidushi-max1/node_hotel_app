const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'sour', 'spicy'],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const drinkModel = mongoose.model('drinkModel', drinkSchema);
module.exports = drinkModel;