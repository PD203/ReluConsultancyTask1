import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDo1F2y_lpqP2YIYGvgLzQvE4Bjt1IzTOg",
  authDomain: "login-reg-769bd.firebaseapp.com",
  projectId: "login-reg-769bd",
  storageBucket: "login-reg-769bd.appspot.com",
  messagingSenderId: "779949648727",
  appId: "1:779949648727:web:cdc9d0a479ba179076ac12",
  measurementId: "G-M130E4QLLJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };
