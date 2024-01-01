import { Module } from '@nestjs/common';
import { admin } from './services/firebase-admin.service';

@Module({
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useValue: admin,
    },
  ],
  exports: ['FIREBASE_ADMIN'],
})
export class FirebaseAdminModule {}
