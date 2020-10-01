import React, { useState } from "react";
import { Text, View, TouchableOpacity, ToastAndroid } from "react-native";
import Header from "../../components/Header";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function Home() {
  const [pressed, setPressed] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.buttonOptionsContainer}
        onPress={() => setPressed(!pressed)}
      >
        <MaterialCommunityIcons
          name={pressed ? "chevron-up" : "chevron-down"}
          size={25}
          color="#fff"
        />
      </TouchableOpacity>

      {pressed && (
        <View style={styles.containerOptions}>
          <View style={styles.optionsBox}>
            <Text style={styles.optionsText}>
              conectado com "Marco Antônio"
            </Text>
          </View>

          <View style={styles.lineBreaker2} />

          <View style={styles.optionsBox}>
            <Text style={styles.optionsText}>Configurações do Aplicativo</Text>
          </View>

          <View style={styles.lineBreaker2} />

          <View style={styles.optionsBox}>
            <Text style={styles.optionsText}>Configurações da Conta</Text>
          </View>

          <View style={styles.lineBreaker2} />

          <View style={styles.optionsBox}>
            <Text style={styles.optionsText}>Desconectar</Text>
          </View>
        </View>
      )}

      <Text style={styles.title}>Minhas Contas</Text>
      <View style={styles.lineBreaker} />

      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("Detail", "UEMA");
        }}
      >
        <Text style={styles.boxText}>UEMA - marcogoncalves@aluno.uema.br</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("Detail", "Google");
        }}
      >
        <Text style={styles.boxText}>Google - marcoant008@gmail.com</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("Detail", "Outlook");
        }}
      >
        <Text style={styles.boxText}>Outlook - marcoant008@outlook.com</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        onPress={() => {
          navigation.navigate("Detail", "Yahoo");
        }}
      >
        <Text style={styles.boxText}>Yahoo - marcoant008@yahoo.com</Text>
      </TouchableOpacity>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.addReceitaButton}
          onPress={() =>
            ToastAndroid.show("Adicionar conta", ToastAndroid.SHORT)
          }
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            style={{ padding: 5 }}
            name="plus"
            color={"#fff"}
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
