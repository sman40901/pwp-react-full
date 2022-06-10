// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs , auth} from 'firebase/firestore/lite';
// import { getFirestore } from "firebase/firestore";
// import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJIq86FpDtS2cG3Bd4hNplBTVYC6Tqofc",
  authDomain: "myecommerce1-391de.firebaseapp.com",
  projectId: "myecommerce1-391de",
  storageBucket: "myecommerce1-391de.appspot.com",
  messagingSenderId: "766280598222",
  appId: "1:766280598222:web:5282c8edc58f9d55d6069f",
  measurementId: "G-4D8PHX46PD"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// const authentication = auth(); // <----- this is where you define auth
const db = getFirestore(firebase);

export { db, auth };


// 4
// Deploy to Firebase Hosting
// You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

// Sign in to Google
// firebase login
// Initiate your project
// Run this command from your app’s root directory:

// firebase init
// When you’re ready, deploy your web app
// Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

// firebase deploy
// After deploying, view your app at myecommerce1-391de.web.app

// Need help? Check out the Hosting docs