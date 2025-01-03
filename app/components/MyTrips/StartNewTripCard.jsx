import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

export default function StartNewTripCard() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>No Trips planned.</Text>
        <Entypo name="emoji-sad" size={24} color="#365b6d" />
        <Link href="../create-trip/search-place" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttontext}>Plan a trip!</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center", // Center items horizontally
    paddingHorizontal: 10, // Add some padding so that content doesnt overlap status bar/safe area
    paddingVertical: 10, // Add some padding so that content doesnt overlap status bar/safe area
    backgroundColor: "#f5f5dc",
    margin: 20,
    justifyContent: "center",
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5dc",
  },
  text: {
    fontSize: 20,
    fontFamily: "outfit-bold",
    textAlign: "center",
    color: "#365b6d",
    margin: 10,
  },
  button: {
    backgroundColor: "#365b6d",
    margin: 10,
    borderRadius: 7,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttontext: {
    color: "white",
    fontFamily: "outfit-bold",
    fontSize: 15,
    padding: 10,
  },
});
