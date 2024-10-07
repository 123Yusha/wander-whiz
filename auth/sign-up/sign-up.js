import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../configs/FireBaseConfigs';
import { Link } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      Alert.alert('Missing fields', 'Please complete all required fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Your passwords do not match. Please try again.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Alert.alert('Wander welcome!', 'Please sign in to continue', [
          {
            text: 'Go to sign in',
            onPress: () => {}, // No need to navigate, just show the alert
          },
        ]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => { /* Optionally handle back navigation */ }}>
        <Ionicons name="arrow-back" size={26} color="#365b6d" />
      </Pressable>
      <Text style={styles.headertext}>Let's sign you up...</Text>
      <View style={styles.container}>
        <Text style={styles.labeltext}>Full Name</Text>
        <TextInput placeholder='Enter Full Name' style={styles.inputbox} onChangeText={setFullName} />

        <Text style={styles.labeltext}>Email</Text>
        <TextInput placeholder='Enter Email' style={styles.inputbox} onChangeText={setEmail} />

        <Text style={styles.labeltext}>Password</Text>
        <TextInput placeholder='Enter Password' style={styles.inputbox} onChangeText={setPassword} secureTextEntry />

        <Text style={styles.labeltext}>Confirm Password</Text>
        <TextInput placeholder='Confirm Your Password' style={styles.inputbox} onChangeText={setConfirmPassword} secureTextEntry />

        <Pressable style={styles.button} onPress={onCreateAccount}>
          <Text style={styles.buttontext}>Create Account</Text>
        </Pressable>

        <Link href="/sign-in" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttontext}>Go To Sign In</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensures the view takes up the whole screen
    padding: 20,               // Add some padding
    backgroundColor: '#f5f5dc', // Optional: Background color
  },
  headertext: {
    fontSize: 18,
    marginTop:20,
    color: '#365b6d', // Optional: Text color
    fontFamily: 'outfit-bold',
  },
  inputbox: {
    backgroundColor: 'white',
    borderRadius: 7,
    width: '100%',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#365b6d',

  },
  labeltext: {
    fontFamily: 'outfit',
    padding: 5,
    color: '#365b6d',
  },
  button: {
    backgroundColor: '#365b6d',
    marginTop: 15,
    borderRadius: 7,
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
