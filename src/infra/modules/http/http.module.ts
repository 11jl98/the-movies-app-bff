import { Module, Global } from '@nestjs/common';
import axios from 'axios';

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
  ],
})
export class AxiosModule {}
