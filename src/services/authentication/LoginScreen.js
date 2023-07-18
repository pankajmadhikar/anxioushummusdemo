import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignup = async () => {
  //   await createUserWithEmailAndPassword(
  //     auth,
  //     "madhikar308@gmail.com",
  //     "pass1234"
  //   )
  // .then((userCredential) => {
  //   const user = userCredential.user;
  //   console.log("user data,", user);
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log("Error Code ==", errorCode);
  //   console.log("Error Message ==", errorMessage);
  // });
  // };

  // const handleLogin = async () => {
  //   console.log("Handle Sign In");
  //   await signInWithEmailAndPassword(auth, "madhikar308@gmail.com", "pass1234")
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log("user data,", user);
  //       console.log("user data,", user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("Error,", errorMessage);
  //     });
  // };

  // const signInGuest = async () => {
  //   await signInAnonymously(auth).then((userCredential) => {
  //     console.log("Done", userCredential);
  //   });
  // };

  // useEffect(() => {
  // auth.onAuthStateChanged((user) => {
  //   if (user) {
  //     console.log("useEffect to check sign In", user.email);
  //   }
  // });
  // }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleSignup();
          }}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            signInGuest();
          }}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Guest User</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenStyles: {},
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "red",
    width: "100%",
    borderRadius: 10,
    padding: 15,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "black",
  },
  buttonOutlineText: {},
  buttonText: {},
});
