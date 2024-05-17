import { ApiProperty } from '@nestjs/swagger';

export class Payload {
    @ApiProperty({ example: 'username123', description: 'The username of the user' })
    username: string;
  
    @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
    email: string;
  
    @ApiProperty({ example: '60c72b2f9b1e8e0015c1e8e1', description: 'The ID of the user' })
    sub: string;
  }