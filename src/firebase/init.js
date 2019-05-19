import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZ8Yc81lEgPBp9SIJ1QsuvCSF9RD-sFuw",
    authDomain: "ninja-smoothies-64af7.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-64af7.firebaseio.com",
    projectId: "ninja-smoothies-64af7",
    storageBucket: "ninja-smoothies-64af7.appspot.com",
    messagingSenderId: "139416733238",
    appId: "1:139416733238:web:8716e9785acc4a69"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Export firestore database
  export default firebaseApp.firestore();