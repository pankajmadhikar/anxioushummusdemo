import React, { useState, createContext } from "react";

import { loginRequest } from "./authentication.service";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../firebase.config";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  auth.onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
      console.log("useEffect to check sign In", user.email);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    setIsLoading(true);
    // loginRequest(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     setIsLoading(false);
    //     setError(e);
    //   });
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user data,", user);
        console.log("user data,", user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error,", errorMessage);
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Password do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user data,", user);
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error Code ==", errorCode);
        console.log("Error Message ==", errorMessage);
        setIsLoading(false);
        setError(error.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    auth.signOut().then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
