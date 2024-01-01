import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { NextFunction, Response } from 'express';
import * as admin from 'firebase-admin';
import { RequestDto } from '../dtos/request.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import jwt from 'jsonwebtoken';
import { AppConfig } from 'src/config/app-config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    interface tokenPayload {
      keyTheMovie: string;
      sessionFirebase: string;
      iat: number;
      exp: number;
    }

    const cookies = JSON.parse(req.headers['Cookies']);

    const cacheData = await this.cacheManager.get(cookies.sessionId);

    if (!cacheData)
      throw new HttpException('Invalid session', HttpStatus.UNAUTHORIZED);

    const { token } = JSON.parse(cacheData as string);

    try {
      const data = jwt.verify(token, AppConfig.get('keyPrivate'));
      const { keyTheMovie, sessionFirebase } = data as tokenPayload;
      const { uid } = await admin.auth().verifyIdToken(sessionFirebase);
      req.user.uuid = uid;
      req.user.lastToken = keyTheMovie;
      next();
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
