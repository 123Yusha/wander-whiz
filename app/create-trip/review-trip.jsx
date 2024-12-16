import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React, { useContext} from 'react'
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
  const {tripData, setTripData}=useContext(CreateTripContext)
  return (
    <View style={styles.container}>
        <Link href="../create-trip/select-budget" asChild>
                <Pressable>
                <Ionicons name="arrow-back" size={26} color="#365b6d" style={styles.backButton} />
                </Pressable>
        </Link>
      <Text style={styles.headerText}>Let's confirm your trip details...</Text>

      <View style={styles.optionsContainer}>
      <Entypo style={styles.Icon} name="globe" size={24} color="#365b6d"/>
      <View><Text style={styles.bodyText}>Travelling to <Text style={styles.contextText}>{tripData?.locationInfo?.name}</Text></Text></View>
      </View>

      <View style={styles.optionsContainer}>
      <Fontisto style={styles.Icon} name="date" size={24} color="#365b6d" />
      <View><Text style={styles.bodyText}>Travelling on <Text style={styles.contextText}>{moment(tripData?.startDate).format('DD MMM YYYY')} until {moment(tripData?.endDate).format('DD MMM YYYY')} </Text></Text></View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        padding: 20,               
        backgroundColor: '#f5f5dc', 
      },
    optionsContainer: {
      marginTop: 5,
      display: 'flex',
      flexDirection: 'row',
      gap: 10
    },
      backButton: {
        margin: 10,
      },
      headerText: {
        fontSize: 40,
        color: '#365b6d', 
        fontFamily: 'outfit-bold',
      },
      Icon: {
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
      },
      bodyText: {
        fontSize: 20,
        fontFamily: 'outfit',
        color: '#365b6d',
    
     },
     contextText: {
      fontSize: 20,
        fontFamily: 'outfit-bold',
        color: '#365b6d',
        
     }
})