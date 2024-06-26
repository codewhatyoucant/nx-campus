import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dtos/createUser.dto';
import { User } from './schemas/user.schema';
import { IUser } from './interfaces/user.interface';
import { LoginDTO } from '../auth/dto/login.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dtos/updateCourse.dto';

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

    async update(id: string, updateUserDTO: UpdateUserDto) {
        const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDTO, { new: false }).exec();
        return updatedUser;
    }

    async findByLogin(login: LoginDTO): Promise<IUser> {
        const { email, password } = login;
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}
