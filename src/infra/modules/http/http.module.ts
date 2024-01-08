import { Module } from '@nestjs/common';
import Axios from 'axios';
import { HttpService } from './services/http.service';

@Module({
  providers: [
    {
      provide: HttpService,
      useValue: new HttpService(
        Axios.create({
          baseURL: 'https://api.example.com', // Sua URL base
        }),
      ),
    },
  ],
  exports: [HttpService],
})
export class HttpModule {}
