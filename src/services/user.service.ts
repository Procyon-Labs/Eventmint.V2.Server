import IUser from "../interface/user.interface";
import User from "../models/user.model";

export default class UserService {
  async create(user: Partial<IUser>) {
    return await User.create(user);
  }

  async getUserById(id: string) {
    return await User.findById(id);
  }
  async findOne(param: {}) {
    return await User.findOne(param, "-__v");
  }
  async getUserByEmail(email: string) {
    return await User.findOne({ email });
  }

  async editById(id: string, obj: Partial<IUser>) {
    return await User.findByIdAndUpdate(id, { $set: obj }, { new: true });
  }

  async getUsers(query: Partial<IUser>) {
    return await User.find(query);
  }
}
