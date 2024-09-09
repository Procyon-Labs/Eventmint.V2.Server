import { model, Schema } from 'mongoose';
import { DATABASES } from '../config/constants.configs';
import { IEvent } from '../interfaces';

const eventSchema = new Schema<IEvent>(
  {
    userId: {
      type: String,
      required: true,
      ref: 'profile',
    },
    name: {
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
    description: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    payAnyPrice: {
      type: Boolean,
      required: false,
      default: false,
    },
    unlimited: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: false,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    productFile: {
      type: String,
      required: true,
      trim: true,
    },
    sales: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    revenue: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
  },
  {
    strict: true,
    timestamps: true,
    versionKey: false,
  },
);
eventSchema.index({ date: 1 });
const Event = model<IEvent>(DATABASES.EVENT, eventSchema);
export default Event;
