"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("../validation");
const express_1 = require("express");
const controllers_1 = require("../controllers");
const body_validation_middleware_1 = require("../middleware/body.validation.middleware");
const query_validation_middleware_1 = require("../middleware/query.validation.middleware");
const params_validation_middleware_1 = require("../middleware/params.validation.middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /sponsorship-application:
 *   post:
 *     summary: Create a sponsorship ad
 *     description: Creates a new sponsorship ad in the system.
 *     tags:
 *       - Sponsorship Applications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSponsorshipApplicationDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.post('/', (0, body_validation_middleware_1.validateBodyDTO)(validation_1.CreateSponsorshipApplicationDto), controllers_1.sponsorshipApplicationController.create);
/**
 * @swagger
 * /sponsorship-application/search:
 *   get:
 *     summary: Search sponsorship ads
 *     description: Retrieves a list of sponsorship ads based on search criteria with pagination.
 *     tags:
 *       - Sponsorship Applications
 *     parameters:
 *       - in: query
 *         name: query
 *         description: Query parameters for searching sponsorship ads
 *         schema:
 *           $ref: '#/components/schemas/GetSponsorshipApplicationWithPaginationDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.get('/search', (0, query_validation_middleware_1.validateQueryDTO)(validation_1.GetSponsorshipApplicationWithPaginationDto), controllers_1.sponsorshipApplicationController.getAllWithPagination);
/**
 * @swagger
 * /sponsorship-application:
 *   get:
 *     summary: Search sponsorship ads (No pagination)
 *     description: Retrieves a list of sponsorship ads based on search criteria.
 *     tags:
 *       - Sponsorship Applications
 *     parameters:
 *       - in: query
 *         name: query
 *         description: Query parameters for searching sponsorship ads
 *         schema:
 *           $ref: '#/components/schemas/GetSponsorshipApplicationWithPaginationDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.get('/', (0, query_validation_middleware_1.validateQueryDTO)(validation_1.GetSponsorshipApplicationDto), controllers_1.sponsorshipApplicationController.find);
/**
 * @swagger
 * /sponsorship-application/{id}:
 *   patch:
 *     summary: Update a sponsorship ad
 *     description: Updates an existing sponsorship ad by ID.
 *     tags:
 *       - Sponsorship Applications
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sponsorship ad to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateSponsorshipApplicationDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.patch('/:id', [(0, params_validation_middleware_1.validateParamsDTO)(validation_1.UniqueIdDTO), (0, body_validation_middleware_1.validateBodyDTO)(validation_1.UpdateSponsorshipApplicationDto)], controllers_1.sponsorshipApplicationController.update);
/**
 * @swagger
 * /sponsorship-application/{id}:
 *   delete:
 *     summary: Delete a sponsorship ad
 *     description: Deletes an existing sponsorship ad by ID.
 *     tags:
 *       - Sponsorship Applications
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the sponsorship ad to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful
 */
router.delete('/:id', (0, params_validation_middleware_1.validateParamsDTO)(validation_1.UniqueIdDTO), controllers_1.sponsorshipApplicationController.hardDelete);
exports.default = router;
