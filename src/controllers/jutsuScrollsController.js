// controller for jutsu scrolls
const JutsuScroll = require("../models/jutsuScrolls");

// Create a new jutsu scroll
const createJutsuScroll = async (req, res) => {
    try {
        const { name, creator, rank, quantity, description, category, accosiatedJutsu } = req.body;
        const newJutsuScroll = new JutsuScroll({ name, creator, rank, quantity, description, category, accosiatedJutsu });
        await newJutsuScroll.save();
        res.status(200).send(newJutsuScroll);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

// Get all jutsu scrolls
const getAllJutsuScrolls = async (req, res) => {
    try {    
        const queryParams = req.query;
        const jutsuScrolls = await JutsuScroll.find(queryParams);
        res.send(jutsuScrolls);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a single jutsu scroll
const getJutsuScroll = async (req, res) => {
    try {
        const jutsuScroll = await JutsuScroll.findById(req.params.id);
        if (!jutsuScroll) {
            return res.status(404).send();
        }
        res.send(jutsuScroll);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a jutsu scroll
const updateJutsuScroll = async (req, res) => {
    try {
        const jutsuScroll = await JutsuScroll.findByIdAndUpdate
            (req.params.id, req.body, { 
                new: true, 
                runValidators: true 
            });
        if (!jutsuScroll) {
            return res.status(404).send();
        }
        res.send(jutsuScroll);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Delete a jutsu scroll
const deleteJutsuScroll = async (req, res) => {
    try {
        const jutsuScroll = await JutsuScroll.findByIdAndDelete(req.params.id);
        if (!jutsuScroll) {
            return res.status(404).send();
        }
        res.send(jutsuScroll);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createJutsuScroll,
    getAllJutsuScrolls,
    getJutsuScroll,
    updateJutsuScroll,
    deleteJutsuScroll
};