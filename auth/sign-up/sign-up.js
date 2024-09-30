import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, {useEffect, useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../configs/FireBaseConfigs';


export default function SignUp({navigation}) {
  
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);  // Added navigation as a dependency

  const  [email, setEmail] = useState()
  const  [password, setPassword] = useState()
  const  [confirmPassword, setConfirmPassword] = useState()
  const  [fullName, setFullName] = useState()


  const onCreateAccount=()=>{

  if(!email || !password || !fullName) {
    Alert.alert('Missing fields', 'Please complete all required fields', [
      {
        text: 'Ok',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },]);
    return ;
  }

  if (password !== confirmPassword) {
    Alert.alert('Password Mismatch', 'Your passwords do not match. Please try again.', [
      {
        text: 'Ok',
        onPress: () => console.log('Ok Pressed'),
        style: 'cancel',
      },
    ]);
    return;
  }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    Alert.alert('Wander welcome!', 'Please sign in to continue', [
      {
        text: 'Go to sign in',
        onPress: () => navigation.navigate('SignIn'),
        style: 'cancel',
      },
  
    ]);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
  }


  return (
    <View style={styles.container}>
    <Pressable onPress={() => navigation.navigate('Landing')}>
    <Ionicons name="arrow-back" size={26} color="#365b6d" />
    </Pressable>
    <Text style={styles.headertext}>Let's sign you up...</Text>
      <View style={styles.container}>

        <Text style={styles.labeltext}> Full Name </Text>
        <TextInput placeholder='Enter Full Name' style={styles.inputbox} onChangeText={(value)=>setFullName(value)}/>

        <Text style={styles.labeltext}> Email </Text>
        <TextInput placeholder='Enter Email' style={styles.inputbox} onChangeText={(value)=>setEmail(value)}/>

        <Text style={styles.labeltext}> Password </Text>
        <TextInput  placeholder='Enter Password' style={styles.inputbox} onChangeText={(value)=>setPassword(value)}/>

        <Text style={styles.labeltext}> Confirm Password </Text>
        <TextInput  placeholder='Confirm Your Password' style={styles.inputbox} onChangeText={(value)=>setConfirmPassword(value)}/>

          <Pressable style={styles.button} onPress={onCreateAccount}>
          <Text style={styles.buttontext}>Create Account</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttontext}>Go To Sign In</Text>
          </Pressable>
      </View>
  </View>
  )
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
