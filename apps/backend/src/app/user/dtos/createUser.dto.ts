import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
  @ApiProperty({ example: 'user', description: 'The username of the User'})
  username: string;
  @ApiProperty({ example: 'password', description: 'The password of the User'})
  password: string;
  @ApiProperty({ example: 'email', description: 'The email of the User'})
  email: string;
}