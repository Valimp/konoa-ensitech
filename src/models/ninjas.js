const mongoose = require('mongoose');

const ninjasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    masteredJutsu: {
        type: Array,
        required: true
    },
    clan: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    borrowingHistory: {
        type: Array,
        required: true
    }
});

const Ninjas = mongoose.model('Ninjas', ninjasSchema);

module.exports = Ninjas;
