import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
    @Prop({ required: true })
    title: string;
}
export const RoleSchema = SchemaFactory.createForClass(Role);

RoleSchema.pre('save', async function (next) {
    console.log('pre save hook');
}
);