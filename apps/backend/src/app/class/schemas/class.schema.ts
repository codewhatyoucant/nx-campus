import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    startDate: Date;

    @Prop({ required: true })
    endDate: string;

    @Prop({ required: true })
    users: User[];

    @Prop({ required: true })
    active: boolean;
}
export const ClassSchema = SchemaFactory.createForClass(Class);

ClassSchema.pre('save', async function (next) {
    console.log('pre save hook');
}
);