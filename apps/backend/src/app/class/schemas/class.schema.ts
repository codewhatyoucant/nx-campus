import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';
import { User } from '../../user/schemas/user.schema';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
  @ApiProperty({ example: 'Math 101', description: 'The name of the class' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: '2023-09-01T00:00:00.000Z', description: 'The start date of the class' })
  @Prop({ required: true })
  startDate: Date;

  @ApiProperty({ example: '2023-12-01T00:00:00.000Z', description: 'The end date of the class' })
  @Prop({ required: true })
  endDate: string;

  @ApiProperty({ type: [User], description: 'The users enrolled in the class' })
  @Prop({ required: true })
  users: User[];

  @ApiProperty({ example: true, description: 'Whether the class is active' })
  @Prop({ required: true })
  active: boolean;
}

export const ClassSchema = SchemaFactory.createForClass(Class);

ClassSchema.pre('save', async function (next) {
  console.log('pre save hook');
});