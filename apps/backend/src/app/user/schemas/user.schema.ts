import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    [x: string]: string;
    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    linkedIn: string;

    @Prop()
    github: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = await bcrypt.hash(this['password'], 10);
        this['password'] = hashed;
        return next();
    } catch (error) {
        return next(error);
    }
}
);