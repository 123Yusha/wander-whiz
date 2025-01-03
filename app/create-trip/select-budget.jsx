import { View, Text, StyleSheet, Pressable, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { SelectBudgetOptions } from '../constants/Options';
import OptionsCard from '../components/CreateTrip/OptionsCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
  const [selectedOption, setSelectedOption] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);

useEffect(()=> {
  selectedOption && setTripData({
    ...tripData,
    budget:selectedOption?.title
  })
},[selectedOption])

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeContainer}>
    <View style={styles.container}>
      <Link href="../create-trip/select-dates" asChild>
                <Pressable>
                <Ionicons name="arrow-back" size={26} color="#365b6d" style={styles.backButton} />
                </Pressable>
        </Link>
      <Text style={styles.headerText}>Whats your budget?</Text>
      <FlatList
        data={SelectBudgetOptions}
        renderItem={({item, index})=>(
          <TouchableOpacity onPress={()=>setSelectedOption(item)}>
            <OptionsCard option={item} selectedOption={selectedOption}/>
          </TouchableOpacity>
        )}
      />
        {selectedOption ? (<Link href="/create-trip/review-trip" asChild >
        <Pressable style={styles.button} >
        <Text style={styles.buttontext}>Continue</Text>
        </Pressable>
        </Link>)
        :
        (<Pressable style={[styles.button, { opacity: 0.5 }]} disabled>
          <Text style={styles.buttontext}>Select a budget to continue</Text>
        </Pressable>)}
    </View>
    </SafeAreaView>
    </GestureHandlerRootView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    padding: 20,               
    
    
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5dc",
  },
  headerText: {
    fontSize: 40,
    color: '#365b6d', 
    fontFamily: 'outfit-bold',
  },
  backButton: {
    margin: 10,
  },
  button: {
    backgroundColor: '#365b6d',
    margin: 10,
    borderRadius: 7,
    paddingVertical: 10,
    alignItems: 'center',

},
  buttontext: {
    color:'white',
    fontFamily: 'outfit-bold',
    fontSize: 15,
    padding: 10,

  },
})

