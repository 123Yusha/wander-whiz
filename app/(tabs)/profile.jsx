import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { useRouter} from "expo-router";
import { auth } from "../configs/FireBaseConfigs";

export default function MyProfile() {

  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        router.replace("/"); // Redirect to the landing page or login screen
      });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <Text style={styles.headerText}>My Profile</Text>
      <Pressable style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttontext}>Log out</Text>
          </Pressable>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#365b6d",
    marginTop:50,
    margin: 10,
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontFamily: "outfit-bold",
    fontSize: 15,
    padding: 10,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5dc",
  },
  container: {
    flex: 1, // Ensures the view takes up the whole screen
    padding: 20, // Add some padding
    backgroundColor: "#f5f5dc", // Optional: Background color
  },
  headerText: {
    fontSize: 40,
    marginTop: 20,
    color: "#365b6d", // Optional: Text color
    fontFamily: "outfit-bold",
  },
});
