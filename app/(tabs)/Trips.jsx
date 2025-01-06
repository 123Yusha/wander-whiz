import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import StartNewTripCard from "../components/MyTrips/StartNewTripCard";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Trips</Text>
        <AntDesign name="pluscircle" size={40} color="#365b6d" />
      </View>
      {userTrips?.length === 0 ? <StartNewTripCard /> : null}
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
  headerText: {
    fontSize: 40,
    color: "#365b6d", // Optional: Text color
    fontFamily: "outfit-bold",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
});
