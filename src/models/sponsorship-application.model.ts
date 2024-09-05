import { Schema, model } from 'mongoose';
import { DATABASES } from '../config';
import { ISponsorshipApplication } from '../interface';
import mongooseAutoPopulate from 'mongoose-autopopulate';
import { paginatePlugin } from '../utils';

const sponsorshipApplicationSchema = new Schema<ISponsorshipApplication>(
  {
    sponsorshipAd: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: DATABASES.SPONSORSHIP_AD,
      autopopulate: true,
    },
    email: { type: String, required: true },
    pitchDeck: { type: String, required: true },
    verified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

sponsorshipApplicationSchema.plugin(mongooseAutoPopulate);
sponsorshipApplicationSchema.plugin(paginatePlugin);

export const SponsorshipApplicationModel = model<ISponsorshipApplication>(
  DATABASES.SPONSORSHIP_APPLICATION,
  sponsorshipApplicationSchema
);
