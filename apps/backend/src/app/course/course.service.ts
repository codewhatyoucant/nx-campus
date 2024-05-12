import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDTO } from './dto/createCourse.dto';
import { Course, CourseSchema } from './schemas/course.schema';


@Injectable()
export class CourseService {

    constructor(
        @InjectModel(Course.name) private readonly courseModel: Model<Course>
    ) { }

    async create(createCourseDTO: CreateCourseDTO): Promise<Course> {
        const createdCourse = await this.courseModel.create(createCourseDTO);
        return createdCourse;
    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.find().exec();
    }

    async findOne(id: string): Promise<Course> {
        const courseWithLessons = await this.courseModel.findOne({ _id: id }).populate('lessons').exec();
        return courseWithLessons;
    }

    async delete(id: string) {
        const deletedCourse = await this.courseModel.findByIdAndDelete({ _id: id }).exec();
        return deletedCourse;
    }

    async update(id: string, createCourseDTO: CreateCourseDTO) {
        const updatedUser = await this.courseModel.findByIdAndUpdate(id, createCourseDTO, { new: false }).exec();
        return updatedUser;
    }
}
