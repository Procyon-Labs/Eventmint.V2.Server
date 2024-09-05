import { FilterQuery } from 'mongoose';
import { IUser } from '../interfaces';
import { UserModel } from '../models';

export default class UserService {
  async create(User: Partial<IUser>) {
    return await UserModel.create(User);
  }

  async checkUserExistence(id: string) {
    return (await UserModel.exists({ _id: id })) ? true : false;
  }

  async getUserById(id: string) {
    return await UserModel.findById(id);
  }
  async findOne(param: object) {
    return await UserModel.findOne(param, '-__v');
  }
  async getUserByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  async editById(id: string, obj: Partial<IUser>) {
    return await UserModel.findByIdAndUpdate(id, { $set: obj }, { new: true });
  }

  async getUsers(query: FilterQuery<IUser>) {
    return await UserModel.find(query);
  }
}
