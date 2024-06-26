// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
 
  // apiKey: "AIzaSyBMzUe4OzuPI73OrZL6dfQt7ThrBN6n54g",
  // authDomain: "maher-v.firebaseapp.com",
  // databaseURL: "https://maher-v-default-rtdb.firebaseio.com",
  // projectId: "maher-v",
  // storageBucket: "maher-v.appspot.com",
  // messagingSenderId: "420487600136",
  // appId: "1:420487600136:web:a5f68189b563c0db1199bd"



  apiKey: "AIzaSyC4qfODc1T-EIDV3JL-DsQ_nBuNWr0ne5A",
  authDomain: "react-auth-da2f5.firebaseapp.com",
  projectId: "react-auth-da2f5",
  storageBucket: "react-auth-da2f5.appspot.com",
  messagingSenderId: "622489962584",
  appId: "1:622489962584:web:f911abf1b8c1b7b49ea22d"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);

export default firestoreDatabase;

export const provider =  new GoogleAuthProvider()