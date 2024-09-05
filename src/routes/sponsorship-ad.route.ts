import { Router } from 'express';
import { sponsorshipAdController } from '../controllers';
import { validateBodyDTO } from '../middleware/body.validation.middleware';
import { CreateSponsorshipAdDto } from '../validation';

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
 *       201:
 *         description: Sponsorship ad created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SponsorshipAd'
 *       400:
 *         description: Bad request
 */
router.post('/', validateBodyDTO(CreateSponsorshipAdDto), sponsorshipAdController.create);

// router.get(
//     '/search',
//     [processRequestQuery(newsletterSubscriptionValidation.find.query), orSearchParamConverter],
//     newsletterSubscriptionController.find,
//   );

//   router.get(
//     '/count',
//     [processRequestQuery(newsletterSubscriptionValidation.find.query), orSearchParamConverter],
//     newsletterSubscriptionController.getCount,
//   );

//   router.get(
//     '/exists',
//     [processRequestQuery(newsletterSubscriptionValidation.find.query), orSearchParamConverter],
//     newsletterSubscriptionController.exists,
//   );

//   router.get(
//     '/unsubscribe/:id',
//     [processRequestQuery(newsletterSubscriptionValidation.find.query), orSearchParamConverter],
//     newsletterSubscriptionController.delete,
//   );

//   router.get(
//     '/',
//     [processRequestQuery(newsletterSubscriptionValidation.find.query), orSearchParamConverter],
//     newsletterSubscriptionController.getAll,
//   );

//   router.get(
//     '/:pagination',
//     [processRequestQuery(newsletterSubscriptionValidation.find.query), orSearchParamConverter],
//     newsletterSubscriptionController.getAll,
//   );

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
