import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import React, {useEffect} from 'react';
import { Link } from 'expo-router';

export default function Landing() {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image 
        source={require('../assets/images/wwlogo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>
        Welcome to Wander Whiz, your pocket trip planner!
      </Text>

    <Link href="auth/sign-up" asChild > 
     <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Sign up</Text>
     </Pressable>
    </Link>

    <Link href="auth/sign-in" asChild > 
     <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Sign in</Text>
     </Pressable>
    </Link>

    <Link href="/sign-in" asChild > 
     <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Sign in with Google </Text>
     </Pressable>
    </Link>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',     // Center items horizontally
    padding: 20,              // Add some padding for better layout
    backgroundColor: '#f5f5dc'
  },
  image: {
    width: '100%',
    height: 280,        // Let height be calculated based on aspect ratio
    aspectRatio: 1.5,         // Adjust the aspect ratio as needed
  },
  text: {
    fontSize: 20,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    color: '#365b6d',
    marginBottom: 20,
    marginTop: -20,
  },

  button: {
    backgroundColor: '#365b6d',
    margin: 5,
    borderRadius: 7,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center'

},
  buttontext: {
    color:'white',
    fontFamily: 'outfit',
    fontSize: 15,
    padding: 10,
},
});
