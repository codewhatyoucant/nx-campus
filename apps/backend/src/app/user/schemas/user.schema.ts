import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @ApiProperty({ example: 'johndoe', description: 'The username of the user' })
  @Prop({ required: true })
  username: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user', writeOnly: true })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
  @Prop({ required: true })
  email: string;
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
});
