// import * as firebase from "firebase";

// const loginRequest = (email, password) => {
//   return firebase.auth().signInWithEmailAndPassword(email, password);
// };

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase.config.js";

const loginRequest = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user data,", user);
      console.log("user data,", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error,", errorMessage);
    });
};
