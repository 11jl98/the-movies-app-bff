declare global {
  namespace NodeJS {
    interface processEnv {
      APPLICATION_NAME: string;
      ENABLE_INSTRUMENTATION: string;
      NODE_ENV: string;
      PORT: string;
      APPLICATION_PREFIX: string;
      THE_MOVIE_URL: string;
      API_KEY: string;
      FIREBASE_URL_BD: string;
      CACHE_TEMP: string;
      KEY_PRIVATE: string;
    }
  }
}

export {};
