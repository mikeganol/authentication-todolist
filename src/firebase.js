import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEaQ5Ya4e5zA1pOCZp7lN_zqou1ye3fQg",
  authDomain: "auth-todolist-dff02.firebaseapp.com",
  databaseURL: "https://auth-todolist-dff02-default-rtdb.firebaseio.com",
  projectId: "auth-todolist-dff02",
  storageBucket: "auth-todolist-dff02.appspot.com",
  messagingSenderId: "265217750497",
  appId: "1:265217750497:web:343aa7752fc240c5cf4ea0"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
