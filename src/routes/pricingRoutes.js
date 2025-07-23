const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');

/**
 * @swagger
 * tags:
 *   name: Pricing
 *   description: operations for services, plans, and features (pricing structure)
 */

/**
 * @swagger
 * /pricing/services:
 *   get:
 *     summary: Get all services with their plans and features
 *     tags: [Pricing]
 *     responses:
 *       200:
 *         description: List of all services with plans and features
 */
router.get('/services', pricingController.getAllServicesPricing);

/**
 * @swagger
 * /pricing/service/{id}:
 *   get:
 *     summary: Get pricing for a specific service (with plans and features)
 *     tags: [Pricing]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Pricing details for the service
 *       404:
 *         description: Service not found
 */
router.get('/service/:id', pricingController.getPricingByService);

// /**
//  * @swagger
//  * /pricing/service:
//  *   post:
//  *     summary: Create a new service
//  *     tags: [Pricing]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - title
//  *             properties:
//  *               title:
//  *                 type: string
//  *               icon_name:
//  *                 type: string
//  *     responses:
//  *       201:
//  *         description: Service created
//  *       400:
//  *         description: Bad request
//  */
// router.post('/service', pricingController.createService);

// /**
//  * @swagger
//  * /pricing/service/{id}:
//  *   put:
//  *     summary: Update a service
//  *     tags: [Pricing]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: Service ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               title:
//  *                 type: string
//  *               icon_name:
//  *                 type: string
//  *     responses:
//  *       200:
//  *         description: Service updated
//  *       404:
//  *         description: Service not found
//  */
// router.put('/service/:id', pricingController.updateService);

// /**
//  * @swagger
//  * /pricing/service/{id}:
//  *   delete:
//  *     summary: Delete a service
//  *     tags: [Pricing]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         schema:
//  *           type: integer
//  *         required: true
//  *         description: Service ID
//  *     responses:
//  *       200:
//  *         description: Service deleted
//  *       404:
//  *         description: Service not found
//  */
// router.delete('/service/:id', pricingController.deleteService);

/**
 * @swagger
 * /pricing/plan:
 *   post:
 *     summary: Create a new plan for a service
 *     tags: [Pricing]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - service_id
 *               - name
 *               - price
 *             properties:
 *               service_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plan created
 *       400:
 *         description: Bad request
 */
router.post('/plan', pricingController.createPlan);

/**
 * @swagger
 * /pricing/plan/{planId}:
 *   put:
 *     summary: Update a plan
 *     tags: [Pricing]
 *     parameters:
 *       - in: path
 *         name: planId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Plan ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: Plan updated
 *       404:
 *         description: Plan not found
 */
router.put('/plan/:planId', pricingController.updatePlan);

/**
 * @swagger
 * /pricing/plan/{planId}:
 *   delete:
 *     summary: Delete a plan
 *     tags: [Pricing]
 *     parameters:
 *       - in: path
 *         name: planId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Plan ID
 *     responses:
 *       200:
 *         description: Plan deleted
 *       404:
 *         description: Plan not found
 */
router.delete('/plan/:planId', pricingController.deletePlan);

/**
 * @swagger
 * /pricing/plan/{planId}/features:
 *   post:
 *     summary: Add features to a plan (bulk)
 *     tags: [Pricing]
 *     parameters:
 *       - in: path
 *         name: planId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Plan ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Features added
 *       400:
 *         description: Bad request
 */
router.post('/plan/:planId/features', pricingController.addFeatures);

/**
 * @swagger
 * /pricing/plan/{planId}/features:
 *   put:
 *     summary: Replace all features for a plan
 *     tags: [Pricing]
 *     parameters:
 *       - in: path
 *         name: planId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Plan ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Features updated
 *       400:
 *         description: Bad request
 */
router.put('/plan/:planId/features', pricingController.updateFeatures);

/**
 * @swagger
 * /pricing/feature/{featureId}:
 *   delete:
 *     summary: Delete a feature
 *     tags: [Pricing]
 *     parameters:
 *       - in: path
 *         name: featureId
 *         schema:
 *           type: integer
 *         required: true
 *         description: Feature ID
 *     responses:
 *       200:
 *         description: Feature deleted
 *       404:
 *         description: Feature not found
 */
router.delete('/feature/:featureId', pricingController.deleteFeature);

/**
 * @swagger
 * /pricing/service-with-plans:
 *   post:
 *     summary: Create a service with plans and features (nested)
 *     tags: [Pricing]
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
 *               plans:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     price:
 *                       type: string
 *                     features:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           feature:
 *                             type: string
 *     responses:
 *       201:
 *         description: Service with plans and features created
 *       400:
 *         description: Bad request
 */
router.post('/service-with-plans', pricingController.createServiceWithPlansAndFeatures);
module.exports = router;