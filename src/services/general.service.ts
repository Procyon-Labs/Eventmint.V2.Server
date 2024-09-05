import { Model, Document } from 'mongoose';
// import { UserModel } from '../models';

export class GeneralService<T extends Document> {
  private DBModel: Model<T>;

  constructor(model: Model<T>) {
    this.DBModel = model;
  }

  // registerModels = async () => {
  //   await UserModel.findOne();
  //   return true;
  // };

  create = async (body: Partial<T>): Promise<T> => {
    return await this.DBModel.create(body);
  };

  getAll = async (pagination: number, searchDetails: object = {}): Promise<T[]> => {
    return await this.DBModel.find(searchDetails)
      .limit(10)
      .skip(pagination)
      .sort({ updatedAt: 'desc' })
      .select('-__v');
  };

  update = async (searchDetails: object, update: object): Promise<T> => {
    return await this.DBModel.findOneAndUpdate({ ...searchDetails }, update, {
      new: true,
    }).select('-__v');
  };

  getCount = async (searchData: object) => {
    return await this.DBModel.countDocuments({ ...searchData }).sort({ updatedAt: 'desc' });
  };

  find = async (searchData: object): Promise<T[]> => {
    return await this.DBModel.find({ ...searchData })
      .sort({ updatedAt: 'desc' })
      .select('-__v');
  };

  findOne = async (searchData: object): Promise<T> => {
    return this.DBModel.findOne({ ...searchData })
      .sort({ updatedAt: 'desc' })
      .select('-__v');
  };

  softDelete = async (searchParams: object): Promise<T> => {
    return await this.DBModel.findOneAndUpdate(
      { ...searchParams, deleted: false },
      { deleted: true },
      {
        new: true,
      },
    ).select('-__v');
  };

  hardDelete = async (searchParams: object): Promise<T> => {
    return await this.DBModel.findOneAndDelete(searchParams).select('-__v');
  };

  exists = async (searchParams: object) => {
    return await this.DBModel.exists({ ...searchParams }).sort({ updatedAt: 'desc' });
  };
}
