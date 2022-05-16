// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW4pfbjqrYxPMPoxde0zxJsCaBkNQ6Y8c",
  authDomain: "ss-warehouse-8a001.firebaseapp.com",
  projectId: "ss-warehouse-8a001",
  storageBucket: "ss-warehouse-8a001.appspot.com",
  messagingSenderId: "821383329563",
  appId: "1:821383329563:web:69115b9edabeefba9a05be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;