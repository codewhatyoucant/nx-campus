import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonDTO } from './createLesson.dto';

export class UpdateLessonDto extends PartialType(CreateLessonDTO) {}
