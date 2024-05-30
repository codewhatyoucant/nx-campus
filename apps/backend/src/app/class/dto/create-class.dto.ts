import { User } from "../../user/schemas/user.schema";

export class CreateClassDto {
    name: string;
    startDate: Date;
    endDate: Date;
    users: User[];
    active: boolean;
}
