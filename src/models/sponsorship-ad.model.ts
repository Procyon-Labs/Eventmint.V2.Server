import mongooseAutoPopulate from 'mongoose-autopopulate';
import { DATABASES } from '../config';
import { ISponsorshipAd } from '../interface';
import { model, Schema } from 'mongoose';
import { paginatePlugin } from '../utils';

const sponsorshipAdSchema = new Schema<ISponsorshipAd>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: DATABASES.USER,
      autopopulate: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    quantity: { type: Number, required: false },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

sponsorshipAdSchema.plugin(mongooseAutoPopulate);
sponsorshipAdSchema.plugin(paginatePlugin);

export const SponsorshipAdModel = model<ISponsorshipAd>(
  DATABASES.SPONSORSHIP_AD,
  sponsorshipAdSchema
);
