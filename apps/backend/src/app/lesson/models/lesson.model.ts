import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Lesson extends Document {
  @ApiProperty({ example: 'Module1', description: 'The module name of the lesson' })
  module: string;

  @ApiProperty({ example: 'Introduction to Math', description: 'The title of the lesson' })
  title: string;

  @ApiProperty({ example: 'Basic principles', description: 'The subtitle of the lesson' })
  subtitle: string;

  @ApiProperty({ example: 'Lecture', description: 'The type of the lesson' })
  type: string;
}
