import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#365b6d",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        name="Trips"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="plane" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Discover"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="earth" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
