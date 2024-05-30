import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Course } from '../../course/schemas/course.schema';

export type CurriculumDocument = HydratedDocument<Curriculum>;

@Schema()
export class Curriculum {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Course' })
    courses: Course[];
}
export const CurriculumSchema = SchemaFactory.createForClass(Curriculum);

CurriculumSchema.pre('save', async function (next) {
    console.log('pre save hook');
}
);