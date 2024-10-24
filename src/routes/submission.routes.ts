import express from 'express';

import SubmissionController from '../controllers/submissions.controller';

const {
    fetchSubmission,
    fetchAllSubmission
} = new SubmissionController();
const router = express.Router();

//fetch Submissions
router.get("/:sponsorId", fetchSubmission);

//fetch all Submissions
router.get("/", fetchAllSubmission);

export default router;