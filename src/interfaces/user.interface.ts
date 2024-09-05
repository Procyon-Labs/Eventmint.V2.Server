import { Document } from 'mongoose';

export interface IUser extends Document {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string | undefined | null;
  imageUrl?: string | undefined | null;
  bio?: string | undefined | null;
  userType: string;
  role: string;
  createdAt?: Date;
}

export enum UserType {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'superAdmin',
}

export enum Roles {
  BUSINESS_OWNER = 'businessOwner',
  SPONSOR = 'sponsor',
  CUSTOMER = 'customer',
}
