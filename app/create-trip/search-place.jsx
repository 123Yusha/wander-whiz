import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SearchPlace() {
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="../(tabs)/Trips" asChild>
          <Pressable>
            <Ionicons name="arrow-back" size={26} color="#365b6d" style={styles.button} />
          </Pressable>
        </Link>
        <Text style={styles.headerText}>Where would you like to explore? </Text>
      </View>
      <GooglePlacesAutocomplete
        placeholder='Search a location...'
        fetchDetails={true}
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });
          router.push('/create-trip/select-traveller');
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'en',
        }}
        styles={{
          textInput: {
            backgroundColor: '#f0f0f0',
            height: 44,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#365b6d',
            paddingVertical: 15,
            paddingHorizontal: 10,
            fontSize: 16,
            width: '100%',
            marginTop: 15,
          },
          listView: {
            backgroundColor: '#fff',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Use flex to fill available space
    padding: 20,
    backgroundColor: '#f5f5dc',
    justifyContent: 'flex-start', // Align children from the start
  },
  headerContainer: {
    marginBottom: 15, // Space below the header
  },
  headerText: {
    fontSize: 40,
    color: '#365b6d',
    fontFamily: 'outfit-bold',
  },
  button: {
    margin: 10, // Space to the right of the button
  },
});

