// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDm4_m65Sagh978TOjxmd-G_aZ-yHe8hME",
    authDomain: "mm-crypto.firebaseapp.com",
    databaseURL: "https://mm-crypto.firebaseio.com",
    projectId: "mm-crypto",
    storageBucket: "mm-crypto.appspot.com",
    messagingSenderId: "706793946843",
    appId: "1:706793946843:web:f8bb61f358797bbd4d56fe",
    measurementId: "G-GCZ3XS7RY1"
  },
  auth0ApiConfig: {
    client_id: 'A6dsM7rTUaRee6Ld89c1kqqVL3q8Kw04',
    client_secret: 'V3vE5wqkwHjAilvfnG0-z0pNNfu3t5r-deoEPr6tGEYKEc3Jzxv37YqBo6LdtEfB',
    audience: 'https://localhost:44362/',
    grant_type: 'client_credentials'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
