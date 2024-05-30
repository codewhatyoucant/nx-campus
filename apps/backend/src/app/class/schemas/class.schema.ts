import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';
import { Curriculum } from '../../curriculum/schemas/curriculum.schema';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: string;

    @Prop({ required: true })
    users: User[];

    @Prop({ required: true })
    active: boolean;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Curriculum' })
    curriculum: Curriculum;
}
export const ClassSchema = SchemaFactory.createForClass(Class);

ClassSchema.pre('save', async function (next) {
    console.log('pre save hook');
}
);