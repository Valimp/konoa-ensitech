const mongoose = require('mongoose');

const jutsuScrollsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    accosiatedJutsu: {
        type: Array,
        required: true
    }
});

const jutsuScrolls = mongoose.model('jutsuScrolls', jutsuScrollsSchema);

module.exports = jutsuScrolls;
