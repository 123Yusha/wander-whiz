import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';;

export default function SignIn({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);  // Added navigation as a dependency

  return (
    <View style={styles.container}>
    <Pressable onPress={() => navigation.navigate('Landing')}>
    <Ionicons name="arrow-back" size={26} color="#365b6d" />
    </Pressable>
      <Text style={styles.headertext}>Let's sign you in...</Text>
        <View style={styles.container}>
          <Text style={styles.labeltext}> Email </Text>
          <TextInput placeholder='Enter Email' style={styles.inputbox}/>
          <Text style={styles.labeltext}> Password </Text>
          <TextInput secureTextEntry={true} placeholder='Enter Password' style={styles.inputbox}/>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.buttontext}>Sign in</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.buttontext}>Create account</Text>
            </Pressable>
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
