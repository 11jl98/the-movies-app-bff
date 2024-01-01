import * as admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('./the-movie.json'),
});

export { admin };
