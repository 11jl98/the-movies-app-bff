import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './repositories/auth.repository';
import { FirebaseAdminModule } from 'src/infra/modules/firebase/firebase-admin.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthMiddleware } from './middlewares/auth-middleware';
import * as cookieParser from 'cookie-parser';
@Module({
  providers: [AuthService, AuthRepository, AuthMiddleware],
  controllers: [AuthController],
  imports: [
    FirebaseAdminModule,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ttl: 60 * configService.get('tempCache'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule,
  ],
  exports: [AuthMiddleware],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cookieParser())
      .forRoutes('*')
      .apply(AuthMiddleware)
      .exclude('/auth/create-session', '/auth/register')
      .forRoutes('*');
  }
}
