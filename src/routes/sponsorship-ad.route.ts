import {
  CreateSponsorshipAdDto,
  GetSponsorshipAdDto,
  GetSponsorshipAdWithPaginationDto,
  UniqueIdDTO,
  UpdateSponsorshipAdDto,
} from '../validation';
import { Router } from 'express';
import { sponsorshipAdController } from '../controllers';
import { validateBodyDTO } from '../middleware/body.validation.middleware';
import { validateQueryDTO } from '../middleware/query.validation.middleware';
import { validateParamsDTO } from '../middleware/params.validation.middleware';

const router = Router();

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
router.post('/', validateBodyDTO(CreateSponsorshipAdDto), sponsorshipAdController.create);

/**
 * @swagger
 * /sponsorship-ad/search:
 *   get:
 *     summary: Search sponsorship ads
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
router.get(
  '/search',
  validateQueryDTO(GetSponsorshipAdWithPaginationDto),
  sponsorshipAdController.getAllWithPagination,
);

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
router.get('/', validateQueryDTO(GetSponsorshipAdDto), sponsorshipAdController.find);

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
router.patch(
  '/:id',
  [validateParamsDTO(UniqueIdDTO), validateBodyDTO(UpdateSponsorshipAdDto)],
  sponsorshipAdController.update,
);

//   router.delete(
//     '/:id',
//     processRequestParams(objectIdValidation.find.params),
//     newsletterSubscriptionController.delete,
//   );

export default router;
