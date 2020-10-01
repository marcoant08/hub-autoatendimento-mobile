import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

function Header({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hub de Autoatendimento</Text>
    </View>
  );
}

export default Header;
