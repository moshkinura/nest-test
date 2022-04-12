import { ApiProperty } from '@nestjs/swagger'

export class TokenDto {
  @ApiProperty({
    description: 'The code',
    required: true,
  })
  code: string
}
