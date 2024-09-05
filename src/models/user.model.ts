import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema<IUser>(
  {
    _id: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  },
);

const User = model<IUser>('User', userSchema);
export default User;
