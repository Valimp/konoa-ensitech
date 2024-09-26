const express = require("express");
const ninjasController = require("../controllers/ninjasController");

const router = express.Router();

// Create a new ninja
router.post("/", ninjasController.createNinja);

// Get all ninjas
router.get("/", ninjasController.getAllNinjas);

// Get a single ninja
router.get("/:id", ninjasController.getNinja);

// Update a ninja
router.put("/:id", ninjasController.updateNinja);

// Delete a ninja
router.delete("/:id", ninjasController.deleteNinja);

module.exports = router;