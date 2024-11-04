import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,  // Ensures the view takes up the whole screen
    padding: 20,               // Add some padding
    backgroundColor: '#f5f5dc', // Optional: Background color
  },
  headerText: {
    fontSize: 40,
    marginTop:20,
    color: '#365b6d', // Optional: Text color
    fontFamily: 'outfit-bold',
  },
})