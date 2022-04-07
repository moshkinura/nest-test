import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: 'The ID of a user',
    default: 1,
    required: true,
  })
  id: number;

  @ApiProperty({
    description: 'The login of a user',
    required: false,
  })
  login: string;

  @ApiProperty({
    description: 'The firstname of a user',
    required: false,
  })
  firstname: string;

  @ApiProperty({
    description: 'The lastname of a user',
    required: false,
  })
  lastname: string;

  @ApiProperty({
    description: 'The age of a user',
    minimum: 1,
    required: false,
  })
  age: number;
}
