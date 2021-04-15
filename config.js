import * as firebase from 'firebase'
require('@firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDo9amQyh5SqGBbuxLRtBiDADymHMqwKKw",
    authDomain: "willy-app-63452.firebaseapp.com",
    projectId: "willy-app-63452",
    storageBucket: "willy-app-63452.appspot.com",
    messagingSenderId: "1089975192288",
    appId: "1:1089975192288:web:2b0733d3c1bc742c011e85",
    measurementId: "G-JK6KEGWF6B"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase.firestore();