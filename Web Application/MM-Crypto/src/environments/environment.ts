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
    client_id: '3JC2S33fQUZPMXgo8RSXK8dD5qneLNm1',
    client_secret: 'oBHNyS8T1X8lOA7kruWaK43JqABL89TbJAr1yiEw4noCxQdCQWS8_-cCp0AyecyL',
    audience: 'https://api.mmcrypto.org/',
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
