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
 * /sponsorship-ad:
 *   post:
 *     summary: Create a sponsorship ad
 *     description: Creates a new sponsorship ad in the system.
 *     tags:
 *       - Sponsorship Ads
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSponsorshipAdDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.post('/', (0, body_validation_middleware_1.validateBodyDTO)(validation_1.CreateSponsorshipAdDto), controllers_1.sponsorshipAdController.create);
/**
 * @swagger
 * /sponsorship-ad/search:
 *   get:
 *     summary: Search sponsorship ads
 *     description: Retrieves a list of sponsorship ads based on search criteria with pagination.
 *     tags:
 *       - Sponsorship Ads
 *     parameters:
 *       - in: query
 *         name: query
 *         description: Query parameters for searching sponsorship ads
 *         schema:
 *           $ref: '#/components/schemas/GetSponsorshipAdWithPaginationDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.get('/search', (0, query_validation_middleware_1.validateQueryDTO)(validation_1.GetSponsorshipAdWithPaginationDto), controllers_1.sponsorshipAdController.getAllWithPagination);
/**
 * @swagger
 * /sponsorship-ad:
 *   get:
 *     summary: Search sponsorship ads (No pagination)
 *     description: Retrieves a list of sponsorship ads based on search criteria.
 *     tags:
 *       - Sponsorship Ads
 *     parameters:
 *       - in: query
 *         name: query
 *         description: Query parameters for searching sponsorship ads
 *         schema:
 *           $ref: '#/components/schemas/GetSponsorshipAdWithPaginationDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.get('/', (0, query_validation_middleware_1.validateQueryDTO)(validation_1.GetSponsorshipAdDto), controllers_1.sponsorshipAdController.find);
/**
 * @swagger
 * /sponsorship-ad/{id}:
 *   patch:
 *     summary: Update a sponsorship ad
 *     description: Updates an existing sponsorship ad by ID.
 *     tags:
 *       - Sponsorship Ads
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
 *             $ref: '#/components/schemas/UpdateSponsorshipAdDto'
 *     responses:
 *       '200':
 *         description: Successful
 */
router.patch('/:id', [(0, params_validation_middleware_1.validateParamsDTO)(validation_1.UniqueIdDTO), (0, body_validation_middleware_1.validateBodyDTO)(validation_1.UpdateSponsorshipAdDto)], controllers_1.sponsorshipAdController.update);
/**
 * @swagger
 * /sponsorship-ad/{id}:
 *   delete:
 *     summary: Delete a sponsorship ad
 *     description: Deletes an existing sponsorship ad by ID.
 *     tags:
 *       - Sponsorship Ads
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
router.delete('/:id', (0, params_validation_middleware_1.validateParamsDTO)(validation_1.UniqueIdDTO), controllers_1.sponsorshipAdController.hardDelete);
exports.default = router;
