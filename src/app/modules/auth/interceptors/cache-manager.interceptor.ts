import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';
import { Observable, map, tap } from 'rxjs';
import { AppConfig } from 'src/config/app-config';
import { ResponseDto } from '../dtos/response.dto';

@Injectable()
export class CacheManagerInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    return next.handle().pipe(
      tap(async (response: ResponseDto) => {
        try {
          if (response) {
            const { keyTheMovie, sessionFirebase, uid } = response;
            const token = jwt.sign(
              { keyTheMovie, sessionFirebase, uid },
              AppConfig.get('keyPrivate'),
            );
            await this.cacheManager.set(response.sessionId, token);
          }
        } catch (error) {
          throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
      }),
      map((response: ResponseDto) => {
        if (response) {
          return { sessionId: response.sessionId };
        }
      }),
    );
  }
}
