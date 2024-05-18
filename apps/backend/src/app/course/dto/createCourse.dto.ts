import { ApiProperty } from '@nestjs/swagger';

export class CreateCourseDTO {
  @ApiProperty({ example: 'Course Title', description: 'The title of the course' })
  title: string;

  @ApiProperty({ example: 'Course Subtitle', description: 'The subtitle of the course' })
  subtitle: string;

  @ApiProperty({ example: 'Course Description', description: 'The description of the course' })
  description: string;

  @ApiProperty({ example: 'http://example.com/image.jpg', description: 'The image URL of the course' })
  image: string;

  @ApiProperty({ example: true, description: 'Indicates if the course is featured' })
  featured: boolean;
}
