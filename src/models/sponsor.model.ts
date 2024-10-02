import { model, Schema } from 'mongoose';
import { DATABASES } from '../config/constants.configs';
import { ISponsor } from '../interfaces';

const sponsorSchema = new Schema<ISponsor>(
  {
    userId: {
      type: String,
      required: true,
      ref: 'profile',
    },
    keymessage: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    campaign: {
      type: String,
      required: true,
      trim: true,
    },

    budget: {
      type: Number,
      required: false,
      min: 0,
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);
sponsorSchema.index({ date: 1 });
const SPONSOR = model<ISponsor>(DATABASES.SPONSOR, sponsorSchema);
export default SPONSOR;
