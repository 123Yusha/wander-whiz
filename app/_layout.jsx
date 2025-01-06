import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import "../context/CreateTripContext";
import { CreateTripContext } from "../context/CreateTripContext";
import { useState, useEffect } from "react";
import { auth } from "./configs/FireBaseConfigs";
import { onAuthStateChanged } from "firebase/auth";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  const [tripData, setTripData] = useState([]);
  const [loading, setLoading] = useState();

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Use router.push() to navigate instead of replace
        router.replace("/Trips");
      } else {
        router.replace("/");
      }
      setLoading(false); // Stop the loading spinner once the auth state is checked
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [router]);
  console.log("Loading state:", loading); // Log loading state after the update

  if (!fontsLoaded || loading) {
    // Show ActivityIndicator when loading or fonts are not loaded yet
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#365b6d" />
      </View>
    );
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1, // Take up full screen space
    justifyContent: "center", // Center the ActivityIndicator
    alignItems: "center", // Center the ActivityIndicator horizontally
    backgroundColor: "#f5f5dc", // Optional: Background color for loading screen
  },
});
