import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Routes />
        <StatusBar style="light" translucent />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
