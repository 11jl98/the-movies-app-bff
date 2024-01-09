import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  keyTheMovie: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  uid: string;
}
