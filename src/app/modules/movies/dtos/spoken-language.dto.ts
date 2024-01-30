import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SpokenLanguageDto {
  @ApiProperty()
  @IsString()
  english_name: string;

  @ApiProperty()
  @IsString()
  iso_639_1: string;

  @ApiProperty()
  @IsString()
  name: string;
}
