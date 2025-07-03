const express = require('express');
const router = express.Router();
const promotionsController = require('../controllers/promotionsController');

/**
 * @swagger
 * tags:
 *   name: Promotions
 *   description: API endpoints for managing promotions
 */

/**
 * @swagger
 * /promotions:
 *   post:
 *     summary: Create a new promotion
 *     tags: [Promotions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - offer
 *               - desc
 *               - valid
 *             properties:
 *               title:
 *                 type: string
 *               offer:
 *                 type: string
 *               desc:
 *                 type: string
 *               valid:
 *                 type: string
 *                 format: date
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: Promotion created
 *       400:
 *         description: Bad request
 */
router.post('/', promotionsController.createPromotion);

/**
 * @swagger
 * /promotions:
 *   get:
 *     summary: Get all promotions
 *     tags: [Promotions]
 *     responses:
 *       200:
 *         description: List of all promotions
 */
router.get('/', promotionsController.getAllPromotions);

/**
 * @swagger
 * /promotions/{id}:
 *   get:
 *     summary: Get a promotion by ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Promotion ID
 *     responses:
 *       200:
 *         description: Promotion found
 *       404:
 *         description: Promotion not found
 */
router.get('/:id', promotionsController.getPromotionById);

/**
 * @swagger
 * /promotions/{id}:
 *   put:
 *     summary: Update a promotion by ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Promotion ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               offer:
 *                 type: string
 *               desc:
 *                 type: string
 *               valid:
 *                 type: string
 *                 format: date
 *               img:
 *                 type: string
 *     responses:
 *       200:
 *         description: Promotion updated
 *       404:
 *         description: Promotion not found
 */
router.put('/:id', promotionsController.updatePromotion);

/**
 * @swagger
 * /promotions/{id}:
 *   delete:
 *     summary: Delete a promotion by ID
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Promotion ID
 *     responses:
 *       200:
 *         description: Promotion deleted
 *       404:
 *         description: Promotion not found
 */
router.delete('/:id', promotionsController.deletePromotion);

module.exports = router;