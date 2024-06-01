import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Lesson } from '../../lesson/schema/lesson.schema';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    subtitle: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    image: string;

    @Prop({ required: true })
    featured: boolean;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Lesson' })
    lessons: Lesson[];
}
export const CourseSchema = SchemaFactory.createForClass(Course);

CourseSchema.pre('save', async function (next) {
    console.log('pre save hook');
}
);