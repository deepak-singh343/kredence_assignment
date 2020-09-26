import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyCXQx11LB2W3akwzjlklUoggfMvQkB0HgQ",
    authDomain: "kredence-1ec84.firebaseapp.com",
    databaseURL: "https://kredence-1ec84.firebaseio.com",
    projectId: "kredence-1ec84",
    storageBucket: "kredence-1ec84.appspot.com",
    messagingSenderId: "1089778117197",
    appId: "1:1089778117197:web:ab96388f7a439d55c4ca04",
    measurementId: "G-8NKBG2WMDC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;