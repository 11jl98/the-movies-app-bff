import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VideoDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty()
  @IsString()
  published_at: string;
}
