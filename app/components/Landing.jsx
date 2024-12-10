import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


export default function Landing() {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      
        <Image 
          source={require('../assets/images/wwlogo.png')}
          style={styles.image}
        />
        <Text style={styles.text}>
          Welcome to Wander Whiz, your pocket trip planner!
        </Text>
      
        <Link href="/sign-up" asChild> 
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </Pressable>
        </Link>
        
        <Link href="/sign-in" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </Pressable>
        </Link>
      
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',  // Center items on the screen vertically
    alignItems: 'center',
    backgroundColor: '#f5f5dc',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5dc',
  },
  image: {
    width: '80%',
    aspectRatio: 1,           // Adjust based on the logo's shape
    resizeMode: 'contain',
  },
  text: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: '#365b6d',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#365b6d',
    marginVertical: 10,
    borderRadius: 7,
    width: '80%',                // Control button width
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
        color:'white',
        fontFamily: 'outfit-bold',
        fontSize: 15,
        padding: 10,
    
  },
});
