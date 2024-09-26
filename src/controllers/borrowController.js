// make route to borrow jutsuScrolls
const Emprunts = require("../models/emprunts");
const JutsuScroll = require("../models/jutsuScrolls");

const borrowJutsuScroll = async (req, res) => {
    try {
        const { ninjaId, jutsuScrollId } = req.body;
        const jutsuScroll = await JutsuScroll.findById(jutsuScrollId);
        if (!jutsuScroll) {
            return res.status(404).send({ message: `Jutsu scroll not found with id ${jutsuScrollId}` });
        }
        // Check if the JutsuScroll is already borrowed
        const existingEmprunt = await Emprunts.findOne({ justuScrollId: jutsuScrollId });
        if (existingEmprunt && existingEmprunt.status === "borrowed") {
            return res.status(400).send({ message: "Jutsu scroll already borrowed" });
        }
        const newEmprunt = new Emprunts({
            ninjaId,
            jutsuScrollId,
            borrowingDate: new Date(),
            plannedReturnDate: new Date(Date.now() + 12096e5),
            status: "borrowed",
            note: ""
        });
        await jutsuScroll.save();
        res.send(jutsuScroll);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

const returnJutsuScroll = async (req, res) => {
    try {
        const { ninjaId, jutsuScrollId } = req.body;
        const jutsuScroll = await JutsuScroll.findById(jutsuScrollId);
        if (!jutsuScroll) {
            return res.status(404).send({ message: `Jutsu scroll not found with id ${jutsuScrollId}` });
        }
        // Check if the JutsuScroll is already borrowed
        const existingEmprunt = await Emprunts.findOne({ justuScrollId: jutsuScrollId });
        if (!existingEmprunt || existingEmprunt.status === "returned") {
            return res.status(400).send({ message: "Jutsu scroll not borrowed" });
        }
        existingEmprunt.status = "returned";
        existingEmprunt.returnDate = new Date();
        await existingEmprunt.save();
        res.send(existingEmprunt);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
};

module.exports = {
    borrowJutsuScroll,
    returnJutsuScroll
};