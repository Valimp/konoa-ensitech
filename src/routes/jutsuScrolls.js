const express = require("express");
const jutsuScrollsController = require("../controllers/jutsuScrollsController");

const router = express.Router();

// Create a new jutsu scroll
router.post("/", jutsuScrollsController.createJutsuScroll);

// Get all jutsu scrolls
router.get("/", jutsuScrollsController.getAllJutsuScrolls);

// Get a single jutsu scroll
router.get("/:id", jutsuScrollsController.getJutsuScroll);

// Update a jutsu scroll
router.put("/:id", jutsuScrollsController.updateJutsuScroll);

// Delete a jutsu scroll
router.delete("/:id", jutsuScrollsController.deleteJutsuScroll);

module.exports = router;