const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

/**
 * @swagger
 * tags:
 *   name: News
 *   description: API for managing news articles
 */

/**
 * @swagger
 * /news:
 *   post:
 *     summary: Create a news article
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *               - published
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *               author:
 *                 type: string
 *               published:
 *                 type: string
 *                 format: date
 *               img:
 *                 type: string
 *     responses:
 *       201:
 *         description: News created
 *       400:
 *         description: Bad request
 */
router.post('/', newsController.createNews);

/**
 * @swagger
 * /news:
 *   get:
 *     summary: Get all news articles
 *     tags: [News]
 *     responses:
 *       200:
 *         description: List of all news articles
 */
router.get('/', newsController.getAllNews);

/**
 * @swagger
 * /news/{id}:
 *   get:
 *     summary: Get a news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: News ID
 *     responses:
 *       200:
 *         description: News found
 *       404:
 *         description: News not found
 */
router.get('/:id', newsController.getNewsById);

/**
 * @swagger
 * /news/{id}:
 *   put:
 *     summary: Update a news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: News ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *               author:
 *                 type: string
 *               published:
 *                 type: string
 *                 format: date
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: News updated
 *       404:
 *         description: News not found
 */
router.put('/:id', newsController.updateNews);

/**
 * @swagger
 * /news/{id}:
 *   delete:
 *     summary: Delete a news article by ID
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: News ID
 *     responses:
 *       200:
 *         description: News deleted
 *       404:
 *         description: News not found
 */
router.delete('/:id', newsController.deleteNews);

module.exports = router;