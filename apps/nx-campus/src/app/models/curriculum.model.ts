import { Course } from './course.model';


export interface Curriculum {
    title: string;
    description: string;
    courses: Course[];
}