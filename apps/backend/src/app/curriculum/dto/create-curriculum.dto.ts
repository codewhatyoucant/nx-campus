import { Course } from "../../course/schemas/course.schema";

export class CreateCurriculumDto {
    title: string;
    description: string;
    courses: Course[];
}
