import {
  MovieDetailResponse,
  MovieReviewsResponse,
  ResponseVideo,
  Review,
  Video,
} from '../../types/movie-detail';
import { MovieResponse } from '../../types/movies.types';
import { ReviewDto } from '../review.dto';
import { VideoDto } from '../video.dto';
import { GetDetailMovieResBuilderDto } from './get-detail-movie.res.builder.dto';

export class GetDetailMovieResBuilder {
  buildResponse(
    detail: MovieDetailResponse,
    video: ResponseVideo,
    review: MovieReviewsResponse,
    similar: MovieResponse,
  ): GetDetailMovieResBuilderDto {
    return {
      detail_movie: detail,
      similar: similar.results,
      reviews: this.formatReview(review.results),
      video: this.formatVideo(video.results),
    };
  }

  protected formatReview(reviews: Review[]): ReviewDto[] {
    return reviews.map((review) => {
      return {
        name: review.author_details.name,
        username: review.author_details.username,
        avatar_path: review.author_details.avatar_path,
        rating: review.author_details.rating,
        create_at: review.created_at,
        content: review.content,
      };
    });
  }

  protected formatVideo(videos: Video[]): VideoDto[] {
    return videos.map((video) => {
      return {
        name: video.name,
        key: video.key,
        published_at: video.published_at,
      };
    });
  }
}
