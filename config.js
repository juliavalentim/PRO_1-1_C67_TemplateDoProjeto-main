import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {

    apiKey: "AIzaSyAiVu64bk9nNW1oHbAkFokj7FDZT__UMMk",
  
    authDomain: "pro67-2db4e.firebaseapp.com",
  
    databaseURL: "https://pro67-2db4e-default-rtdb.firebaseio.com",
  
    projectId: "pro67-2db4e",
  
    storageBucket: "pro67-2db4e.appspot.com",
  
    messagingSenderId: "701392519873",
  
    appId: "1:701392519873:web:ff2858cbdefe37da190a40"
  
  };
  
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();