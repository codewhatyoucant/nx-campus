import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @ApiProperty({ example: 'Module1', description: 'The module name of the lesson' })
  @Prop({ required: true })
  module: string;

  @ApiProperty({ example: 'Introduction to Math', description: 'The title of the lesson' })
  @Prop({ required: true })
  title: string;

  @ApiProperty({ example: 'Basic principles', description: 'The subtitle of the lesson' })
  @Prop({ required: true })
  subtitle: string;

  @ApiProperty({ example: 'Lecture', description: 'The type of the lesson' })
  @Prop({ required: true })
  type: string;

  @ApiProperty({ example: '60c72b2f9b1e8e0015c1e8e1', description: 'The ID of the associated course', type: String })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
  course: mongoose.Types.ObjectId;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);

LessonSchema.pre('save', async function (next) {
  console.log('pre save hook');
});
