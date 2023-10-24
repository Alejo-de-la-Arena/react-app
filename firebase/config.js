// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoGAFWT2lvt0bbMdVP76_ahpfnql4q7Qc",
    authDomain: "react-app-abe48.firebaseapp.com",
    projectId: "react-app-abe48",
    storageBucket: "react-app-abe48.appspot.com",
    messagingSenderId: "323680935412",
    appId: "1:323680935412:web:fc68b4f0d124360a51ada1",
    measurementId: "G-6CCS1KL7RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirebase = () => {}