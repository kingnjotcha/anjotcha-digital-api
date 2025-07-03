const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: API for managing previous projects
 */

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - summary
 *               - started
 *               - owner
 *               - technologies
 *             properties:
 *               title:
 *                 type: string
 *               summary:
 *                 type: string
 *               started:
 *                 type: string
 *                 format: date
 *               completed:
 *                 type: string
 *                 format: date
 *               owner:
 *                 type: string
 *               technologies:
 *                 type: string
 *                 description: Comma-separated or JSON string of technologies used
 *               demo:
 *                 type: string
 *                 description: Link to demo
 *               image:
 *                 type: string
 *                 description: Image URL
 *     responses:
 *       201:
 *         description: Project created
 *       400:
 *         description: Bad request
 */
router.post('/', projectsController.createProject);

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of all projects
 */
router.get('/', projectsController.getAllProjects);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     summary: Get a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project found
 *       404:
 *         description: Project not found
 */
router.get('/:id', projectsController.getProjectById);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Update a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               summary:
 *                 type: string
 *               started:
 *                 type: string
 *                 format: date
 *               completed:
 *                 type: string
 *                 format: date
 *               owner:
 *                 type: string
 *               technologies:
 *                 type: string
 *               demo:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Project updated
 *       404:
 *         description: Project not found
 */
router.put('/:id', projectsController.updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project deleted
 *       404:
 *         description: Project not found
 */
router.delete('/:id', projectsController.deleteProject);

module.exports = router;