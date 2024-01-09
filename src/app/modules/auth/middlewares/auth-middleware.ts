import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { RequestDto } from '../dtos/request.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import * as jwt from 'jsonwebtoken';
import { AppConfig } from 'src/config/app-config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    interface tokenPayload {
      keyTheMovie: string;
      uid: string;
      iat: number;
      exp: number;
    }

    const sessionId = req.headers['cookies'];
    const cacheData = await this.cacheManager.get(sessionId);

    if (!cacheData)
      throw new HttpException('Invalid session', HttpStatus.UNAUTHORIZED);

    const token = cacheData as string;

    try {
      const data = jwt.verify(token, AppConfig.get('keyPrivate'));
      const { keyTheMovie, uid } = data as tokenPayload;
      req.user = {
        lastToken: keyTheMovie,
        uuid: uid,
      };
      next();
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
