import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ErrorDto {
  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsString()
  status: number;
}
