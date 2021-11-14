// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCToF4m5zYPG9MSaB0XAPXNHe6dQXcqJoE",
  authDomain: "rk-tinder.firebaseapp.com",
  projectId: "rk-tinder",
  storageBucket: "rk-tinder.appspot.com",
  messagingSenderId: "555662145995",
  appId: "1:555662145995:web:76e3c3efe8a407d8409e4e",
  measurementId: "G-M2X1P6SBDE",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
