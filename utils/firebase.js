// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA0Pr5kjwxBJibmmWnTSq3AfomeZncQbB0",

  authDomain: "remembership-af366.firebaseapp.com",

  projectId: "remembership-af366",

  storageBucket: "remembership-af366.appspot.com",

  messagingSenderId: "529353936405",

  appId: "1:529353936405:web:9417a8c29001faa89c881c"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app/*, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}*/)
const db = getFirestore(app);

export { app, auth, db };