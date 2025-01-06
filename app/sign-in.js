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
import { auth } from "./configs/FireBaseConfigs";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, router } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSignIn = () => {
    if (!email || !password) {
      Alert.alert("Missing fields", "Please complete all required fields", [
        {
          text: "Ok",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.replace("/Trips");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/invalid-credential") {
          Alert.alert("Error", "Invalid login credentials", [
            {
              text: "cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
          ]);
        }
      });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <Link href="/" asChild>
        <Pressable>
          <Ionicons name="arrow-back" size={26} color="#365b6d" />
        </Pressable>
      </Link>
      <Text style={styles.headertext}>Let's sign you in...</Text>
      <View style={styles.container}>
        <Text style={styles.labeltext}> Email </Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.inputbox}
          onChangeText={(value) => setEmail(value)}
        />

        <Text style={styles.labeltext}> Password </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          style={styles.inputbox}
          onChangeText={(value) => setPassword(value)}
        />

        <Pressable style={styles.button} onPress={onSignIn}>
          <Text style={styles.buttontext}>Sign in</Text>
        </Pressable>

        <Link href="/sign-up" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttontext}>Create account</Text>
          </Pressable>
        </Link>
      </View>
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
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5dc",
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
