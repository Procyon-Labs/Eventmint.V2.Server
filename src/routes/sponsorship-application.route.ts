import {
  CreateSponsorshipApplicationDto,
  GetSponsorshipApplicationDto,
  GetSponsorshipApplicationWithPaginationDto,
  UniqueIdDTO,
  UpdateSponsorshipApplicationDto,
} from '../validation';
import { Router } from 'express';
import { sponsorshipApplicationController } from '../controllers';
import { validateBodyDTO } from '../middleware/body.validation.middleware';
import { validateQueryDTO } from '../middleware/query.validation.middleware';
import { validateParamsDTO } from '../middleware/params.validation.middleware';

const router = Router();

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
router.post(
  '/',
  validateBodyDTO(CreateSponsorshipApplicationDto),
  sponsorshipApplicationController.create,
);

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
router.get(
  '/search',
  validateQueryDTO(GetSponsorshipApplicationWithPaginationDto),
  sponsorshipApplicationController.getAllWithPagination,
);

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
router.get(
  '/',
  validateQueryDTO(GetSponsorshipApplicationDto),
  sponsorshipApplicationController.find,
);

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
router.patch(
  '/:id',
  [validateParamsDTO(UniqueIdDTO), validateBodyDTO(UpdateSponsorshipApplicationDto)],
  sponsorshipApplicationController.update,
);

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
router.delete('/:id', validateParamsDTO(UniqueIdDTO), sponsorshipApplicationController.hardDelete);

export default router;
