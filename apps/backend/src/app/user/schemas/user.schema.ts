import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Schema as MongoSchema } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Role } from '../../roles/schemas/role.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    id: MongoSchema.Types.ObjectId

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ type: String, default: 'user' })
    role: string;

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
