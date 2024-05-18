import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDTO {
  @ApiProperty({ example: 'Module1', description: 'The module name of the lesson' })
  module: string;

  @ApiProperty({ example: 'Lesson Title', description: 'The title of the lesson' })
  title: string;

  @ApiProperty({ example: 'Lesson Subtitle', description: 'The subtitle of the lesson' })
  subtitle: string;

  @ApiProperty({ example: 'Type A', description: 'The type of the lesson' })
  type: string;
}