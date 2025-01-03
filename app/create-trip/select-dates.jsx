import { View, Text, StyleSheet, Pressable, Alert, SafeAreaView } from 'react-native'
import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {

const [startDate, setStartDate] = useState();
const [endDate, setEndDate] = useState();
const { tripData, setTripData } = useContext(CreateTripContext);

const onDateChange = (date, type) => {
  console.log("Date received from CalendarPicker:", date, "Type:", type);

  if (type === 'START_DATE') {
    setStartDate(moment(date)); // Update startDate
    setEndDate(null); // Reset endDate since a new startDate is selected
    console.log("Start Date set to:", moment(date).toString());
  } else if (type === 'END_DATE') {
    setEndDate(moment(date)); // Update endDate
    console.log("End Date set to:", moment(date).toString());
  }
};


const selectDateContinue = () => {
 
  if (!startDate || !endDate || !endDate.isValid()) { // Ensure both dates are selected
    Alert.alert('Select dates', 'Please select both start and end dates', [
      { text: 'Ok', style: 'cancel' },
    ]);
    return;
  }

  // Calculate total days
  const totalDays = endDate.diff(startDate, 'days');
  setTripData({
    ...tripData,
    startDate: startDate,
    endDate: endDate,
    numberOfDays: totalDays+1,
    numberOfNights: totalDays
  })
  console.log("Start Date:", startDate.toString(), "End Date:", endDate.toString());
  console.log("Total Nights:", totalDays, "Total Days:", totalDays+1);
};


  return (
    <SafeAreaView style = {styles.container}>
        <Link href ="/create-trip/select-traveller" asChild>
            <Pressable>
                <Ionicons name="arrow-back" size={26} color="#365b6d" style={styles.backButton} />
            </Pressable>
        </Link>
        <Text style={styles.headerText}>When would you like to travel?</Text>
        <View style={styles.calenderContainer}>
        <CalendarPicker 
        onDateChange={onDateChange} 
        allowRangeSelection={true} 
        minDate={new Date()}
        selectedRangeStyle={{
          backgroundColor: '#B3EBF2'
        }}
        maxRangeDuration={5}
        />
        </View>
        {startDate && endDate && endDate.isValid() ? (
  <Link href="/create-trip/select-budget" asChild>
    <Pressable style={styles.button} onPress={selectDateContinue}>
      <Text style={styles.buttontext}>Continue</Text>
    </Pressable>
  </Link>
) : (
  <Pressable style={[styles.button, { opacity: 0.5 }]} disabled>
    <Text style={styles.buttontext}>Select a date range to continue</Text>
  </Pressable>
)}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,  // Ensures the view takes up the whole screen
        padding: 20,               // Add some padding
        backgroundColor: '#f5f5dc', // Optional: Background color
      },
    calenderContainer: {
        flex: 1,
        margin:10, 
    },
      headerText: {
        fontSize: 40,
        color: '#365b6d', // Optional: Text color
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

