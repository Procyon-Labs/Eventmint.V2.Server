import { Request, Response } from "express";

import Submission from "../services/submission.service";
import Sponsor from "../services/sponsor.service";

const SponsorService = new Sponsor();
const SubmissionService = new Submission();


export default class SubmissionController {

    async fetchSubmission(req: Request, res: Response) {
        try {
            const sponsorId = req.params.sponsorId;

            const sponsor = await SponsorService.getSponsorByQuery({ _id: sponsorId });

            if (!sponsor) {
                return res.status(404).send({
                    success: false,
                    message: "Sponsor not found."
                });
            }

            const submissions = await SubmissionService.find({ sponsorId: req.params.sponsorId });

            return res.status(201).send({
                success: true,
                message: "Details fetched succesfully.",
                data: { count: submissions.length, submissions }
            });

        } catch (error: any) {
            return res.status(500).send({
                success: false,
                message: `Error fetching details: ${error.message}`
            });
        }
    }

}