import { ApiProperty } from '@nestjs/swagger'

export class TokenDto {
  @ApiProperty({
    description: 'The code',
    required: true,
    default: '1234567890'
  })
  code: string
}
