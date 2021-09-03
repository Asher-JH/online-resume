import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCAuLcabJjETGrrOCF5Sy7EE1THQlClpl8",
  authDomain: "react-portfolio-ac24f.firebaseapp.com",
  databaseURL:
    "https://react-portfolio-ac24f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-portfolio-ac24f",
  storageBucket: "react-portfolio-ac24f.appspot.com",
  messagingSenderId: "1011915225361",
  appId: "1:1011915225361:web:93512d408842467a9bb4b0",
  measurementId: "G-5FFHVL9G97",
});

export const firestore = firebase.firestore();

export default firebase;
