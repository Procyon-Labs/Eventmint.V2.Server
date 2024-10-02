export interface ISponsor {
  _id?: string;
  userId: string;
  keymessage: string;
  image: string;
  date: Date;
  location: string;
  industry: string;
  gender: string;
  campaign: string;
  budget?: number;
}
