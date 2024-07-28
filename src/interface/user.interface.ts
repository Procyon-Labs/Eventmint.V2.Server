export default interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string | undefined | null;
  imageUrl?: string | undefined | null;
  bio?: string | undefined | null;
  createdAt?: Date;
}
