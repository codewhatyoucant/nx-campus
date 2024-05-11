import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './schemas/user.schema';
import { LoginDTO } from '../auth/dto/login.dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ) { }

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const createdUser = await this.userModel.create(createUserDTO);
        return createdUser;
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedUser = await this.userModel.findByIdAndDelete({ _id: id }).exec();
        return deletedUser;
    }

    async update(id: string, createUserDTO: CreateUserDTO) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, createUserDTO, { new: false }).exec();
        return updatedUser;
    }

    async findByLogin(login: LoginDTO) {
        const { email, password } = login;
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
        if (await bcrypt.compare(password, user.password)) {
            return user;
        } else {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
    }
}
