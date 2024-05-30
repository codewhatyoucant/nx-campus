import { Injectable } from '@nestjs/common';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Curriculum } from './schemas/curriculum.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CurriculumService {
  constructor(
    @InjectModel(Curriculum.name) private readonly curriculumModel: Model<Curriculum>
  ) { }
  async create(CreateCurriculumDto: CreateCurriculumDto): Promise<Curriculum> {
    const createdCurriculum = await this.curriculumModel.create(CreateCurriculumDto);
    return createdCurriculum;
  }

  async findAll(): Promise<Curriculum[]> {
    return this.curriculumModel.find().populate('courses').exec();
  }

  async findOne(id: string): Promise<Curriculum> {
    const CurriculumWithCourses = await this.curriculumModel.findOne({ _id: id }).populate('courses').exec();
    return CurriculumWithCourses;
  }

  async delete(id: string) {
    const deletedCurriculum = await this.curriculumModel.findByIdAndDelete({ _id: id }).exec();
    return deletedCurriculum;
  }

  async update(id: string, updateCurriculumDto: UpdateCurriculumDto) {
    const updatedCurriculum = await this.curriculumModel.findByIdAndUpdate(id, updateCurriculumDto, { new: false }).exec();
    return updatedCurriculum;
  }
}
