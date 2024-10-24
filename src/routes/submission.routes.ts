import express from 'express';

import SubmissionController from '../controllers/submissions.controller';

const {
    fetchSubmission,
    fetchAllSubmission
} = new SubmissionController();
const router = express.Router();

//fetch all Submissions
router.get("/all/:pubKey", fetchAllSubmission);

//fetch Submissions
router.get("/:sponsorId", fetchSubmission);

export default router;