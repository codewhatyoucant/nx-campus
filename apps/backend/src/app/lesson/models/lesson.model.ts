import { Document } from 'mongoose';

export interface Lesson extends Document {
    module: string;
    title: string;
    subtitle: string;
    type: string;
}