const Ninjas = require('../models/ninjas');

// Create a new ninja
const createNinja = async (req, res) => {
    try {
        const { name, rank, masteredJutsu, clan, speciality, borrowingHistory } = req.body;
        const newNinja = new Ninjas({ name, rank, masteredJutsu, clan, speciality, borrowingHistory });
        await newNinja.save();
        res.status(200).send(newNinja);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

// Get all ninjas
const getAllNinjas = async (req, res) => {
    try {
        const queryParams = req.query;
        const ninjas = await Ninjas.find(queryParams);
        res.send(ninjas);
    } catch (error) {
        res.status(500).send
    }
};

// Get a single ninja
const getNinja = async (req, res) => {
    try {
        const ninja = await Ninjas.findById(req.params.id);
        if (!ninja) {
            return res.status(404).send();
        }
        res.send(ninja);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a ninja
const updateNinja = async (req, res) => {
    try {
        const ninja = await Ninjas.findByIdAndUpdate
            (req.params.id, req.body, { 
                new: true, 
                runValidators: true 
            });
        if (!ninja) {
            return res.status(404).send();
        }
        res.send(ninja);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Delete a ninja
const deleteNinja = async (req, res) => {
    try {
        const ninja = await Ninjas.findByIdAndDelete(req.params.id);
        if (!ninja) {
            return res.status(404).send();
        }
        res.send(ninja);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createNinja,
    getAllNinjas,
    getNinja,
    updateNinja,
    deleteNinja
};