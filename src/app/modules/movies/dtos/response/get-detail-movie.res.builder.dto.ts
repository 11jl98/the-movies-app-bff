import { ApiProperty } from '@nestjs/swagger';
import { MovieDto } from '../movie.dto';
import { IsObject, IsString } from 'class-validator';
import { MovieDetailDto } from '../detail';
import { VideoDto } from '../video.dto';
import { ReviewDto } from '../review.dto';

export class GetDetailMovieResBuilderDto {
  @ApiProperty({
    isArray: true,
    type: MovieDetailDto,
  })
  @IsObject()
  detail_movie: MovieDetailDto;

  @ApiProperty()
  @IsString()
  video: VideoDto[];

  @ApiProperty()
  @IsString()
  reviews: ReviewDto[];

  @ApiProperty({
    isArray: true,
    type: MovieDto,
  })
  @IsString()
  similar: MovieDto[];
}
