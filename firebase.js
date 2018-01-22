import firebase from 'firebase';
//const config = require('./creds');

var config = {
    apiKey: "AIzaSyAhINOMHPGdc-Bnj5JzRUdFsbBrNJ9rp60",
    authDomain: "surdiapp.firebaseapp.com",
    databaseURL: "https://surdiapp.firebaseio.com",
    projectId: "surdiapp",
    storageBucket: "surdiapp.appspot.com",
    messagingSenderId: "772398718929"
  };
  //firebase.initializeApp(config);

firebase.initializeApp(config);



export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;