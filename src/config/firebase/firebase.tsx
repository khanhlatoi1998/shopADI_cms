// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAZARrfHAdc_0dPcGvJ_jqj6-ZObtAENo",
  authDomain: "shop-adi.firebaseapp.com",
  projectId: "shop-adi",
  storageBucket: "shop-adi.appspot.com",
  messagingSenderId: "11009286143",
  appId: "1:11009286143:web:bb29a433e829deec6cd1ca",
  measurementId: "G-G7CCYL7L9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;