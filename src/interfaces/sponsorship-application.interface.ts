import { Document, Types } from 'mongoose';
import { ISponsorshipAd } from './sponsorship-ad.interface';

export interface ISponsorshipApplication extends Document {
  sponsorshipAd: string | Types.ObjectId | ISponsorshipAd;
  email: string;
  pitchDeck: string;
  verified: boolean;
}
