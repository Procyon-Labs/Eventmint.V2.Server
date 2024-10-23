import { model, Schema } from "mongoose";
import ISubmission from "../interfaces/submission.interface";

const submissionSchema = new Schema<ISubmission>({
    userId: {
        type: String,
        required: true
    },
    sponsorId: {
        type: String,
        required: true,
        trim: true
    },
    submission: {
        type: String,
        required: true,
        trim: true
    }
}, {
    strict: true,
    timestamps: true,
    versionKey: false
});

const Submission = model("Submissions", submissionSchema, "Submissions");
export default Submission;