export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/v1',
  jwtTokenName: 'token',
  redirectUrl: 'http://localhost:4200/redirect',
  userPropertyNameInLocalStorage: 'currentUser',
  //You need to edit index.html manually
  websiteTitle: 'Activepieces',
  // BEGIN EE
  firebase: {
    apiKey: 'AIzaSyBik7RRZ6S8QIpG4GqzwoF_SCNn3Dr9PPw',
    authDomain: 'activepieces-b3803.firebaseapp.com',
    projectId: 'activepieces-b3803',
    storageBucket: 'activepieces-b3803.appspot.com',
    messagingSenderId: '89039225374',
    appId: '1:89039225374:web:7e9279293327e02123640f',
  },
  // END EE
};
