const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: Services endpoints for AJP
 */

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Create a new service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               icon:
 *                 type: string
 *     responses:
 *       200:
 *         description: Service created
 *       400:
 *         description: Bad request
 */
router.post('/', servicesController.createService);

/**
 * @swagger
 * /services:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: List of all services
 */
router.get('/', servicesController.getAllServices);

/**
 * @swagger
 * /services/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Service found
 *       404:
 *         description: Service not found
 */
router.get('/:id', servicesController.getServiceById);

/**
 * @swagger
 * /services/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               icon:
 *                 type: string
 *     responses:
 *       200:
 *         description: Service updated
 *       404:
 *         description: Service not found
 */
router.put('/:id', servicesController.updateService);

/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Service deleted
 *       404:
 *         description: Service not found
 */
router.delete('/:id', servicesController.deleteService);

module.exports = router;