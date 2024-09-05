import { Document } from 'mongoose';

export interface IUser extends Document {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string | undefined | null;
  imageUrl?: string | undefined | null;
  bio?: string | undefined | null;
  createdAt?: Date;
}
