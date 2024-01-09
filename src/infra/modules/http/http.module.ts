import { Module, Global } from '@nestjs/common';
import Axios, { AxiosInstance } from 'axios';
import { HttpService } from './services/http.service';

@Global()
@Module({
  providers: [
    {
      provide: HttpService,
      useFactory: (): HttpService => {
        const axiosInstance: AxiosInstance = Axios.create({
          baseURL: 'https://api.themoviedb.org/3',
        });
        return new HttpService(axiosInstance);
      },
    },
  ],
  exports: [HttpService],
})
export class HttpModule {}
