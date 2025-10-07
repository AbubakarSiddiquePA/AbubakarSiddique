// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDok_L__Qsj0rqcRTtV287xCilgaxKTp1A",
    authDomain: "port-5b092.firebaseapp.com",
    projectId: "port-5b092",
    storageBucket: "port-5b092.firebasestorage.app",
    messagingSenderId: "375802223359",
    appId: "1:375802223359:web:29c95f7cbcf3ad60b4caca",
    measurementId: "G-RKS05CL31B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
