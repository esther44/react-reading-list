import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu3vkFX1yAsVvmQoKhKjULuqHb_bOyNro",
  authDomain: "readinglistapp-dacd4.firebaseapp.com",
  projectId: "readinglistapp-dacd4",
  storageBucket: "readinglistapp-dacd4.appspot.com",
  messagingSenderId: "127362373674",
  appId: "1:127362373674:web:eef7fa35ef672c7b7fcb53",
};

// init firebase (from v9)
initializeApp(firebaseConfig);

// init firebase/firestote
const db = getFirestore();

// init firebase/auth
const auth = getAuth();

export { db, auth };
