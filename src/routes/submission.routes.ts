import express from 'express';

import SubmissionController from '../controllers/submissions.controller';

const {
    fetchSubmission,
    fetchAllSubmission
} = new SubmissionController();
const router = express.Router();

//fetch all Submissions
router.get("/details/all", fetchAllSubmission);

//fetch Submissions
router.get("/details/:sponsorId", fetchSubmission);

export default router;