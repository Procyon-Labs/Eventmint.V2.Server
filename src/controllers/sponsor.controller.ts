import { Request, Response } from 'express';

import SponsorService from '../services/sponsor.service';
import cloudinary from '../config/cloudinary.configs';
const { create, uploadImage, getSponsorById, getSponsorByQuery, getSponsors } =
  new SponsorService();

const deployedLink = 'https://procyon-labs-server.onrender.com';
// const deployedLink = "http://localhost:5500.com";

export default class SponsorController {
  async createSponsor(req: Request, res: Response) {
    try {
      const foundSponsor = await getSponsorByQuery({ keymessage: req.body.keymessage });
      if (foundSponsor) {
        return res.status(409).send({
          success: false,
          message: 'Sponsor name already exists',
        });
      }

      const sponsor = await create({ ...req.body, userId: req.params.userId });

      return res.status(200).send({
        success: true,
        message: 'Sponsor created successfully',
        sponsor,
        blink: `${deployedLink}/api/v1/sponsor/${encodeURIComponent(sponsor.keymessage)}`,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while creating sponsor: ${error.message}`,
      });
    }
  }

  async getSponsorById(req: Request, res: Response) {
    try {
      const sponsor = await getSponsorById(req.params.id);

      if (!sponsor) {
        return res.status(404).send({
          success: false,
          message: 'Sponsor with the given ID not found',
        });
      }

      return res.status(200).send({
        success: true,
        message: 'Sponsor fetched successfully',
        sponsor,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while fetching sponsor: ${error.message}`,
      });
    }
  }

  async getSponsorEvents(req: Request, res: Response) {
    try {
      const sponsor = await getSponsors({ userId: req.params.userId });

      if (sponsor.length === 0) {
        return res.status(404).send({
          success: false,
          message: 'Sponsor with the given userId not found',
        });
      }

      return res.status(200).send({
        success: true,
        message: 'Sponsor fetched successfully',
        sponsor,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while fetching Sponsor: ${error.message}`,
      });
    }
  }
  async getAllSponsors(req: Request, res: Response) {
    try {
      const sponsor = await getSponsors({}); // Fetch all events without filtering

      if (sponsor.length === 0) {
        return res.status(404).send({
          success: false,
          message: 'No sponsors found',
        });
      }

      return res.status(200).send({
        success: true,
        message: 'All sponsors fetched successfully',
        sponsor,
      });
    } catch (error: any) {
      return res.status(500).send({
        success: false,
        message: `Error occurred while fetching sponsors: ${error.message}`,
      });
    }
  }

  async uploadImage(req: Request, res: Response) {
    try {
      if (req.file) {
        const imageUrl = await uploadImage(req.file.path); // Call the uploadImage method in the service
        return res.status(201).send({
          success: true,
          message: 'Image uploaded successfully',
          imageUrl,
        });
      }
      return res.status(409).send({
        success: false,
        message: 'Include an Image file',
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  }
}
