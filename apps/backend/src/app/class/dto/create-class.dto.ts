import { ApiProperty, PartialType } from '@nestjs/swagger';
import { User } from '../../user/schemas/user.schema';

export class CreateClassDto {
  @ApiProperty({ example: 'Math 101', description: 'The name of the class' })
  name: string;

  @ApiProperty({ example: '2023-09-01T00:00:00.000Z', description: 'The start date of the class' })
  startDate: Date;

  @ApiProperty({ example: '2023-12-01T00:00:00.000Z', description: 'The end date of the class' })
  endDate: string;

  @ApiProperty({ type: [User], description: 'The users enrolled in the class' })
  users: User[];

  @ApiProperty({ example: true, description: 'Whether the class is active' })
  active: boolean;
}

export class UpdateClassDto extends PartialType(CreateClassDto) {}
