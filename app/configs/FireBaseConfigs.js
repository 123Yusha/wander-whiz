// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTgGR8Ua9lgqI0k2qWN9w_rZM1KTZv-Pk",
  authDomain: "wander-whiz.firebaseapp.com",
  projectId: "wander-whiz",
  storageBucket: "wander-whiz.appspot.com",
  messagingSenderId: "1024557230670",
  appId: "1:1024557230670:web:84340c5498dfaf67c0311f",
  measurementId: "G-R14W33LQGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
}); 