import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import { Link, useRootNavigationState, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SelectTravellerList } from "../constants/Options";
import OptionsCard from "../components/CreateTrip/OptionsCard";
import { useState, useContext } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { ScrollView } from "react-native-gesture-handler";

export default function SelectTraveller() {
  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    setTripData({ ...tripData, travelerCount: selectedTraveller });
  }, [selectedTraveller]);

  const handleContinue = () => {
    if (!selectedTraveller) {
      Alert.alert(
        "Traveler Needed",
        "Please select a traveler before continuing.",
        [{ text: "OK" }]
      );
    } else {
      router.push("/create-trip/select-dates");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Link href="../create-trip/search-place" asChild>
        <Pressable>
          <Ionicons
            name="arrow-back"
            size={26}
            color="#365b6d"
            style={styles.backButton}
          />
        </Pressable>
      </Link>
      <Text style={styles.headerText}>Who's coming along?</Text>
      <FlatList
        data={SelectTravellerList}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedTraveller(item)}>
            <OptionsCard option={item} selectedOption={selectedTraveller} />
          </TouchableOpacity>
        )}
      />
      <Pressable style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttontext}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the view takes up the whole screen
    padding: 20, // Add some padding
    backgroundColor: "#f5f5dc", // Optional: Background color
  },

  headerText: {
    fontSize: 40,
    color: "#365b6d", // Optional: Text color
    fontFamily: "outfit-bold",
  },

  backButton: {
    margin: 10,
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
