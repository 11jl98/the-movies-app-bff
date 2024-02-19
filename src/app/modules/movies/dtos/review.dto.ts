import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ReviewDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  avatar_path: string;

  @ApiProperty()
  @IsString()
  rating: number;

  @ApiProperty()
  @IsString()
  create_at: string;

  @ApiProperty()
  @IsString()
  content: string;
}
