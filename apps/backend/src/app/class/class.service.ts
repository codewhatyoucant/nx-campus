import { Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class } from './entities/class.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClassService {
  constructor(
    @InjectModel(Class.name) private readonly classModel: Model<Class>

  ) { }
  create(createClassDto: CreateClassDto) {
    return this.classModel.create(createClassDto);
  }

  findAll() {
    return this.classModel.find().exec();
  }

  findOne(id: number) {
    return this.classModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return this.classModel.findByIdAndUpdate(id, updateClassDto, { new: false }).exec();
  }

  remove(id: number) {
    return this.classModel.findByIdAndDelete({ _id: id }).exec();
  }
}
