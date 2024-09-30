import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <View>
      <Tabs>
        <Tabs.Screen name="mytrip"/> // name is named after file name
        <Tabs.Screen name="discover"/> // name is named after file name
        <Tabs.Screen name="profile"/> // name is named after file name
      </Tabs>
    </View>
  )
}