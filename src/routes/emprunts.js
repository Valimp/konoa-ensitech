const express = require("express");
const empruntsController = require("../controllers/empruntsController");

const router = express.Router();

// Create a new emprunt
router.post("/", empruntsController.createEmprunt);

// Get all emprunts
router.get("/", empruntsController.getAllEmprunts);

// Get a single emprunt
router.get("/:id", empruntsController.getEmprunt);

// Update a emprunt
router.put("/:id", empruntsController.updateEmprunt);

// Delete a emprunt
router.delete("/:id", empruntsController.deleteEmprunt);

module.exports = router;