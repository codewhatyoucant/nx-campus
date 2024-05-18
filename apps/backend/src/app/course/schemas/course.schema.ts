import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
  @ApiProperty({ example: 'Advanced Mathematics', description: 'The title of the course' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ example: 'A deep dive into advanced mathematics concepts', description: 'The subtitle of the course' })
  @Prop({ required: true })
  subtitle: string;

  @ApiProperty({ example: 'This course covers advanced topics in mathematics...', description: 'The description of the course' })
  @Prop({ required: true })
  description: string;

  @ApiProperty({ example: 'http://example.com/image.jpg', description: 'The URL of the course image' })
  @Prop({ required: true })
  image: string;

  @ApiProperty({ example: true, description: 'Indicates if the course is featured' })
  @Prop({ required: true })
  featured: boolean;
}

export const CourseSchema = SchemaFactory.createForClass(Course);

CourseSchema.pre('save', async function (next) {
  console.log('pre save hook');
  next();
});
