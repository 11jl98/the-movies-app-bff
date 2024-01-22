import { Module } from '@nestjs/common';
import axios from 'axios';
import { HttpServices } from './services/http.service';

@Module({
  providers: [
    {
      provide: 'AXIOS_INSTANCE',
      useFactory: () => {
        const axiosInstance = axios.create({
          baseURL: process.env.BASE_URL_API,
        });
        return axiosInstance;
      },
    },
    HttpServices,
  ],
  exports: [HttpServices],
})
export class AxiosModule {}
