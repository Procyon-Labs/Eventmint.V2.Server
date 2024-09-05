import {
  CreateSponsorshipAdDto,
  GetSponsorshipAdDto,
  GetSponsorshipAdWithPaginationDto,
} from '../validation';
import { Router } from 'express';
import { sponsorshipAdController } from '../controllers';
import { validateBodyDTO } from '../middleware/body.validation.middleware';
import { validateQueryDTO } from '../middleware/query.validation.middleware';

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
 *         description: Successfully checked newsletter message entry existence
 *       '400':
 *         description: Bad request
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
 *       '400':
 *         description: Bad request
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
 *       '400':
 *         description: Bad request
 */
router.get('/', validateQueryDTO(GetSponsorshipAdDto), sponsorshipAdController.find);

//   router.patch(
//     '/:id',
//     [
//       processRequestParams(objectIdValidation.find.params),
//       processRequestBody(newsletterSubscriptionValidation.update.body),
//     ],
//     newsletterSubscriptionController.update,
//   );

//   router.delete(
//     '/:id',
//     processRequestParams(objectIdValidation.find.params),
//     newsletterSubscriptionController.delete,
//   );

export default router;
