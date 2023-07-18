// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsYorX5LyMiceAq0q9-qwneIJcTBvZmqw",
  authDomain: "mealstogo-edfb4.firebaseapp.com",
  projectId: "mealstogo-edfb4",
  storageBucket: "mealstogo-edfb4.appspot.com",
  messagingSenderId: "984254742533",
  appId: "1:984254742533:web:b875d383bd1aef641d1c6c",
};

let app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, app };
