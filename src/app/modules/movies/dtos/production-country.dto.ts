import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ProductionCountryDto {
  @ApiProperty()
  @IsString()
  iso_3166_1: string;

  @ApiProperty()
  @IsString()
  name: string;
}
