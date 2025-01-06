import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function OptionsCard({ option, selectedOption }) {
  return (
    <View
      style={[
        styles.container,
        selectedOption?.id === option?.id ? { borderWidth: 3 } : {},
      ]}
    >
      <View>
        <Text style={styles.optionTitle}>{option.title}</Text>
        <Text style={styles.optionDesc}>{option.desc}</Text>
      </View>
      <Text style={styles.optionIcon}>{option.icon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    margin: 10,
    padding: 16,
    borderColor: "#365b6d",
    backgroundColor: "#f0f0f0",
  },

  optionTitle: {
    color: "black",
    fontFamily: "outfit-bold",
    fontSize: 16,
  },

  optionDesc: {
    color: "black",
    fontFamily: "outfit",
    fontSize: 15,
  },

  optionIcon: {
    fontSize: 30,
  },
});
