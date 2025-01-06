import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { CreateTripContext } from "../../context/CreateTripContext";
import moment from "moment";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function ReviewTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Link href="../create-trip/select-budget" asChild>
          <Pressable>
            <Ionicons
              name="arrow-back"
              size={26}
              color="#365b6d"
              style={styles.backButton}
            />
          </Pressable>
        </Link>
        <Text style={styles.headerText}>
          Let's confirm your trip details...
        </Text>

        <View style={styles.optionsContainer}>
          {/* <FontAwesome6  style={styles.Icon} name="user-group" size={24} color="#365b6d" /> */}
          <Text style={styles.Icon}>👥</Text>
          <View>
            <Text style={styles.bodyText}>
              <Text style={styles.contextText}>
                {tripData?.travelerCount?.people}
              </Text>{" "}
              traveller(s) on the trip
            </Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {/* <Entypo style={styles.Icon} name="globe" size={24} color="#365b6d"/> */}
          <Text style={styles.Icon}>🌎</Text>
          <View>
            <Text style={styles.bodyText}>
              Travelling to{" "}
              <Text style={styles.contextText}>
                {tripData?.locationInfo?.name}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {/* <Fontisto style={styles.Icon} name="date" size={24} color="#365b6d" /> */}
          <Text style={styles.Icon}>🗓️</Text>
          <View>
            <Text style={styles.bodyText}>
              Travelling on{" "}
              <Text style={styles.contextText}>
                {moment(tripData?.startDate).format("DD/MM/Y")} -{" "}
                {moment(tripData?.endDate).format("DD/MM/Y")}{" "}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {/* <FontAwesome6 name="coins" size={24} color="#365b6d" style={styles.Icon} /> */}
          <Text style={styles.Icon}>💰</Text>
          <View>
            <Text style={styles.bodyText}>
              Travelling on a{" "}
              <Text style={styles.contextText}>{tripData?.budget}</Text> budget
            </Text>
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>Build my trip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5dc",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc", // Background color for SafeAreaView
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  optionsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  backButton: {
    margin: 10,
  },
  headerText: {
    fontSize: 40,
    color: "#365b6d",
    fontFamily: "outfit-bold",
    marginBottom: 15,
  },
  Icon: {
    marginRight: 15,
  },
  bodyText: {
    fontSize: 16,
    fontFamily: "outfit",
    color: "black",
    flexShrink: 1,
    flexWrap: "wrap",
  },
  contextText: {
    fontSize: 16,
    fontFamily: "outfit-bold",
    color: "black",
  },
  button: {
    backgroundColor: "#365b6d",
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
});
