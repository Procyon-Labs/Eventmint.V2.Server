import express from 'express';

import SubmissionController from '../controllers/submissions.controller';

const {
    fetchSubmission
} = new SubmissionController();
const router = express.Router();

//fetch Submissions
router.get("/:sponsorId", fetchSubmission);

export default router;