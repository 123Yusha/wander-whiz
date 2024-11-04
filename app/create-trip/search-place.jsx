import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';

export default function SearchPlace() {
  return (
    <View style={styles.container}>
        <Link href="../(tabs)/Trips" asChild>
      <Pressable>
       <Ionicons name="arrow-back" size={26} color="#365b6d" style={styles.button} />
      </Pressable>
      </Link>
      <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder='Search a location...'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInput: {
          backgroundColor: '#f0f0f0',
          height: 44,
          borderRadius: 5,
          paddingVertical: 15,
          paddingHorizontal: 10,
          fontSize: 16,
          width:'100%',
        },
        listView: {
          backgroundColor: '#fff',
        },
      }}
    />
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        flexGrow: 1,
        // alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5dc',
        margin: 20,
        justifyContent: 'center',
      },
      text: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        color: '#365b6d',
        margin: 10,
      },
      button: {
        margin: 10,
     },
})

