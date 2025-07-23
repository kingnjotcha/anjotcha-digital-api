const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (usernames only)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of users with usernames
 */
router.get('/', usersController.getAllUsernames);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Add a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Bad request
 */
router.post('/', usersController.createUser);

module.exports = router;