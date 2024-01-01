import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { RequestDto } from '../dtos/request.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';
import { Observable, map, of, tap } from 'rxjs';
import { AppConfig } from 'src/config/app-config';
import { ResponseDto } from '../dtos/response.dto';

interface ICache {
  [key: string]: string;
}

@Injectable()
export class CacheManagerInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest<RequestDto>();
    const session = req.headers['session'];

    if (session) {
      const cacheData = await this.cacheManager.get<ICache>(session);
      console.log(cacheData, 'cache aqui');

      if (cacheData) {
        return of({ message: 'Session valid' }); // Usando `of` para criar um Observable imediato
      }
    }

    return next.handle().pipe(
      tap(async (response: ResponseDto) => {
        try {
          if (response) {
            const { keyTheMovie, sessionFirebase } = response;
            const token = jwt.sign(
              { keyTheMovie, sessionFirebase },
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
