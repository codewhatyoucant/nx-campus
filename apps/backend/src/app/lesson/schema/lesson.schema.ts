import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
    @Prop({ required: true })
    module: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    subtitle: string;

    @Prop({ required: true })
    type: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true })
    course: mongoose.Types.ObjectId;

}
export const LessonSchema = SchemaFactory.createForClass(Lesson);

LessonSchema.pre('save', async function (next) {
    console.log('pre save hook');
}
);