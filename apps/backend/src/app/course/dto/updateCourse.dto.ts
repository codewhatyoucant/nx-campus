import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './createCourse.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDTO) {}
