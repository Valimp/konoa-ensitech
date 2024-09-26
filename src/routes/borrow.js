const express = require("express");
const borrowController = require("../controllers/borrowController");

const router = express.Router();

/**
 * @swagger
 * /:
 *   post:
 *     summary: Borrow a Jutsu Scroll
 *     description: Allows a user to borrow a jutsu scroll.
 *     tags:
 *       - Borrow
 *     requestBody:
 *       description: Information required to borrow a jutsu scroll.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user borrowing the scroll.
 *               scrollId:
 *                 type: string
 *                 description: ID of the jutsu scroll being borrowed.
 *             required:
 *               - userId
 *               - scrollId
 *     responses:
 *       200:
 *         description: Successfully borrowed the jutsu scroll.
 *       400:
 *         description: Bad request due to missing or invalid parameters.
 *       500:
 *         description: Server error.
 */
router.post("/", borrowController.borrowJutsuScroll);

/**
 * @swagger
 * /return:
 *   post:
 *     summary: Return a Jutsu Scroll
 *     description: Allows a user to return a borrowed jutsu scroll.
 *     tags:
 *       - Borrow
 *     requestBody:
 *       description: Information required to return a jutsu scroll.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID of the user returning the scroll.
 *               scrollId:
 *                 type: string
 *                 description: ID of the jutsu scroll being returned.
 *             required:
 *               - userId
 *               - scrollId
 *     responses:
 *       200:
 *         description: Successfully returned the jutsu scroll.
 *       400:
 *         description: Bad request due to missing or invalid parameters.
 *       500:
 *         description: Server error.
 */
router.post("/return", borrowController.returnJutsuScroll);

module.exports = router;