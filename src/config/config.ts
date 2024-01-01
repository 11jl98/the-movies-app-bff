const stringToBoolean = (value: string) => value === 'true';

const getConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT,

  tempCache: process.env.CACHE_TEMP || 60000,

  theMovieApi: {
    prefixTheMovie: process.env.THE_MOVIE_URL,
    apiKey: process.env.API_KEY,
  },

  firebaseConfig: {
    urlBD: process.env.FIREBASE_URL_BD,
  },

  enableInstrumentation: stringToBoolean(process.env.ENABLE_INSTRUMENTATION),
  keyPrivate: process.env.KEY_PRIVATE,
  app: {
    prefix: process.env.APPLICATION_PREFIX || '/',
    name: process.env.APPLICATION_NAME,
    contextApplication: process.env.APPLICATION_NAME,
  },
});
export default getConfiguration;
export type Configuration = ReturnType<typeof getConfiguration>;
