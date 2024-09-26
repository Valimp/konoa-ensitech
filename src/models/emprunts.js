const mongoose = require('mongoose');

const empruntsSchema = new mongoose.Schema({
    ninjaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    justuScrollId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    borrowingDate: {
        type: Date,
        required: true
    },
    plannedReturnDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

const Emprunts = mongoose.model('Emprunts', empruntsSchema);

module.exports = Emprunts;
