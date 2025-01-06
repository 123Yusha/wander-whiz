import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./configs/FireBaseConfigs";
import { Link, router } from "expo-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      Alert.alert("Missing fields", "Please complete all required fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Password Mismatch",
        "Your passwords do not match. Please try again."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert(
          "Wander welcome!",
          "Your account is live and you are now signed in"
        );
        const user = userCredential.user;
        console.log(user);
        router.replace("/Trips");
      })

      .catch((error) => {
        console.log(error.message);
        if (error.code === "auth/invalid-email") {
          Alert.alert("Invalid Email", "The email address is badly formatted.");
        } else if (error.code === "auth/email-already-in-use") {
          Alert.alert(
            "Email in Use",
            "This email is already registered. Please sign in."
          );
        } else {
          Alert.alert("Error", error.message);
        }
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Link href="/" asChild>
          <Pressable>
            <Ionicons name="arrow-back" size={26} color="#365b6d" />
          </Pressable>
        </Link>

        <Text style={styles.headertext}>Let's sign you up...</Text>

        <Text style={styles.labeltext}>Full Name</Text>
        <TextInput
          placeholder="Enter Full Name"
          style={styles.inputbox}
          autoCorrect={false}
          onChangeText={setFullName}
        />

        <Text style={styles.labeltext}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.inputbox}
          autoCorrect={false}
          onChangeText={setEmail}
        />

        <Text style={styles.labeltext}>Password</Text>
        <TextInput
          autoComplete="off"
          placeholder="Enter Password"
          secureTextEntry={true}
          passwordRules="required: lower;"
          keyboardType="default"
          multiline={false}
          textContentType="oneTimeCode"
          style={styles.inputbox}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setPassword}
        />

        <Text style={styles.labeltext}>Confirm Password</Text>
        <TextInput
          autoComplete="off"
          placeholder="Confirm Your Password"
          secureTextEntry={true}
          passwordRules="required: lower;"
          keyboardType="default"
          multiline={false}
          textContentType="oneTimeCode"
          style={styles.inputbox}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setConfirmPassword}
        />

        <Pressable style={styles.button} onPress={onCreateAccount}>
          <Text style={styles.buttontext}>Create Account</Text>
        </Pressable>

        <Link href="/sign-in" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttontext}>Go To Sign In</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1, // Ensures the view takes up the whole screen
    padding: 20, // Add some padding
    backgroundColor: "#f5f5dc", // Optional: Background color
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#f5f5dc", // Background color for SafeAreaView
  },
  headertext: {
    fontSize: 18,
    marginTop: 20,
    color: "#365b6d", // Optional: Text color
    fontFamily: "outfit-bold",
  },
  inputbox: {
    backgroundColor: "white",
    borderRadius: 7,
    width: "100%",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#365b6d",
  },
  labeltext: {
    fontFamily: "outfit",
    padding: 5,
    color: "#365b6d",
  },
  button: {
    backgroundColor: "#365b6d",
    marginTop: 15,
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontFamily: "outfit",
    fontSize: 15,
    padding: 10,
  },
});
