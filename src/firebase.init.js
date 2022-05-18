// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mW0vOcInaB4qjGZ_2bRsrxH8cu5YTjg",
  authDomain: "ss-warehouse-f2c69.firebaseapp.com",
  projectId: "ss-warehouse-f2c69",
  storageBucket: "ss-warehouse-f2c69.appspot.com",
  messagingSenderId: "394235502100",
  appId: "1:394235502100:web:8a479b698f0fd9d5685101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;