import { Curriculum } from './curriculum.model';
import { User } from './user.model';

export interface Class {
    name: string;
    startDate: Date;
    endDate: Date;
    users: User[];
    active: boolean;
    curriclum: Curriculum
}