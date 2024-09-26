const Emprunts = require('../models/emprunts');

// Create a new emprunt
const createEmprunt = async (req, res) => {
    try {
        const { ninjaId, justuScrollId, borrowingDate, plannedReturnDate, status, note } = req.body;
        const newEmprunt = new Emprunts({
            ninjaId,
            justuScrollId,
            borrowingDate,
            plannedReturnDate,
            status,
            note
        });
        await newEmprunt.save();
        res.status(200).send(newEmprunt);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

// Get all emprunts
const getAllEmprunts = async (req, res) => {
    try {
        const queryParams = req.query;
        const emprunts = await Emprunts.find(queryParams);
        res.send(emprunts);
    } catch (error) {
        res.status(500).send
    }
};

// Get a single emprunt
const getEmprunt = async (req, res) => {
    try {
        const emprunt = await Emprunts.findById(req.params.id);
        if (!emprunt) {
            return res.status(404).send();
        }
        res.send(emprunt);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a emprunt
const updateEmprunt = async (req, res) => {
    try {
        const emprunt = await
            Emprunts.findByIdAndUpdate
            (req.params.id, req.body, {
                new: true,
                runValidators: true
            });
        if (!emprunt) {
            return res.status(404).send();
        }
        res.send(emprunt);
    }
    catch (error) {
        res.status(400).send(error
        );
    }
};

// Delete a emprunt
const deleteEmprunt = async (req, res) => {
    try {
        const emprunt = await Emprunts.findByIdAndDelete(req.params.id);
        if (!emprunt) {
            return res.status(404).send();
        }
        res.send(emprunt);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createEmprunt,
    getAllEmprunts,
    getEmprunt,
    updateEmprunt,
    deleteEmprunt
};