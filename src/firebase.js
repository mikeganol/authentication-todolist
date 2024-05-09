import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA39sK65SjxG8rB11DaAw0sWVy5KgqndjQ",
  authDomain: "authentication-todolist.firebaseapp.com",
  projectId: "authentication-todolist",
  storageBucket: "authentication-todolist.appspot.com",
  messagingSenderId: "548628293585",
  appId: "1:548628293585:web:02b1928664ab547e6ca2f0"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
