// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUINcIUUbBWT_Nb5bTezjnDCw1gHVlu-8",
    authDomain: "pichaapp-355413.firebaseapp.com",
    projectId: "pichaapp-355413",
    storageBucket: "pichaapp-355413.appspot.com",
    messagingSenderId: "337242083659",
    appId: "1:337242083659:web:6daffa1f21af7d3b6058ce"
  };
  

// Initialize Firebase

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
