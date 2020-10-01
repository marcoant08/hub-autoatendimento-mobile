import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDVF7IF9FPyhaxFk0YwmalYbL0XO8wOVeE",
  authDomain: "hub-autoatendimento.firebaseapp.com",
  databaseURL: "https://hub-autoatendimento.firebaseio.com",
  projectId: "hub-autoatendimento",
  storageBucket: "hub-autoatendimento.appspot.com",
  messagingSenderId: "578267800246",
  appId: "1:578267800246:web:6b33f00829f4b7a2807c17",
  measurementId: "G-ZKFDQ9TZ4L",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
