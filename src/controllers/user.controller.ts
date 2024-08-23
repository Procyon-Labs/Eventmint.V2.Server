import { Request, Response } from 'express';
import UserService from '../services/user.service';
import cloudinary from '../config/cloudinary.configs';
import { StatusCodes } from 'http-status-codes';
const { create, getUserById, getUserByEmail, getUsers, findOne, checkUserExistence } =
  new UserService();

export default class UserController {
  async createUser(req: Request, res: Response) {
    const { email } = req.body;

    if (email) {
      const userFromEmail = await findOne({ email: email });
      if (userFromEmail) {
        return res.status(StatusCodes.CONFLICT).send({
          success: false,
          message: 'Duplicate email',
        });
      }
    }

    try {
      const foundUser = await getUserByEmail(req.body.email);
      if (foundUser) {
        return res.status(StatusCodes.CONFLICT).send({
          success: false,
          message: 'Email already exists',
        });
      }

      let imageUrl;
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'EventMint',
        });
        imageUrl = result.secure_url;
      }

      const user = await create({ ...req.body, imageUrl });

      return res.status(StatusCodes.OK).send({
        success: true,
        message: 'User created successfully',
        user,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error occurred while creating user: ${error.message}`,
      });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await getUserById(req.params.id);

      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).send({
          success: false,
          message: 'User with the given ID not found',
        });
      }

      return res.status(StatusCodes.OK).send({
        success: true,
        message: 'User fetched successfully',
        user,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error occurred while fetching user: ${error.message}`,
      });
    }
  }

  async checkUserExistence(req: Request, res: Response) {
    try {
      const data = await checkUserExistence(req.params.id);

      if (!data) {
        return res.status(StatusCodes.NOT_FOUND).send({
          success: true,
          message: 'User with the given ID does not exist',
          data: false
        });
      }

      return res.status(StatusCodes.OK).send({
        success: true,
        message: 'User exists',
        data,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error occurred while fetching user: ${error.message}`,
      });
    }
  }

  async uploadImage(req: Request, res: Response) {
    try {
      if (req.file) {
        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
          folder: 'Verxio',
        });
        const imageUrl = result.secure_url;

        if (!imageUrl) {
          return res.status(StatusCodes.CONFLICT).send({
            success: false,
            message: 'File Upload Failed',
          });
        }
        return res.status(StatusCodes.CREATED).send({
          success: true,
          message: 'Image uploaded successfully',
          imageUrl,
        });
      }
      return res.status(StatusCodes.BAD_REQUEST).send({
        success: false,
        message: 'Include an Image file',
      });
    } catch (err) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error while uploading file`,
      });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const users = await getUsers(req.query);

      return res.status(StatusCodes.OK).send({
        success: true,
        message: 'Users fetched successfully',
        users,
      });
    } catch (error: any) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
        success: false,
        message: `Error occurred while fetching users: ${error.message}`,
      });
    }
  }
}
