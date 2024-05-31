import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonDTO } from './dtos/createLesson.dto';
import { Lesson } from './schema/lesson.schema';
import { UpdateLessonDto } from './dtos/updateLesson.dto';



@Injectable()
export class LessonService {

    constructor(
        @InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>
    ) { }

    async create(createLessonDTO: CreateLessonDTO): Promise<Lesson> {
        const createdLesson = await this.lessonModel.create(createLessonDTO);
        return createdLesson;
    }

    async findAll(): Promise<Lesson[]> {
        return this.lessonModel.find().exec();
    }

    async findOne(id: string): Promise<Lesson> {
        return this.lessonModel.findOne({ _id: id }).exec();
    }

    async delete(id: string) {
        const deletedLesson = await this.lessonModel.findByIdAndDelete({ _id: id }).exec();
        return deletedLesson;
    }

    async update(id: string, updateLessonDTO: UpdateLessonDto) {
        const updatedLesson = await this.lessonModel.findByIdAndUpdate(id, updateLessonDTO, { new: false }).exec();
        return updatedLesson;
    }

}
