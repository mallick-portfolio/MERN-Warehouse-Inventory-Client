// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXcX_q6vXRCcxVsx1-w90LzTPDotmx08A",
  authDomain: "warehouse-inventory-95eff.firebaseapp.com",
  projectId: "warehouse-inventory-95eff",
  storageBucket: "warehouse-inventory-95eff.appspot.com",
  messagingSenderId: "496918917745",
  appId: "1:496918917745:web:a6498344feeb3ad224a1d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth