import React, { useState } from "react";
import { Alert, Image, Text, ToastAndroid, View } from "react-native";
import Header from "../../components/Header";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import styles from "./styles";
import semFoto from "../../assets/perfil.jpg";
import { RectButton } from "react-native-gesture-handler";

function Detail({ route }) {
  const [foto, setFoto] = useState(null);

  async function abrirCamera() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        ToastAndroid.show(
          "Nós precisamos dessa permissão para abrir a câmera.",
          ToastAndroid.LONG
        );
        return;
      }
    }

    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    console.log(data);

    if (data.cancelled) {
      return;
    }

    if (!data.uri) {
      return;
    }

    setFoto(data);
  }

  return (
    <View>
      <Header />
      <View style={styles.containerFoto}>
        <Image style={styles.foto} source={!foto ? semFoto : foto} />
      </View>

      <Text style={styles.text}>
        Solicitar alteração de senha {route.params}
      </Text>
      <Text style={styles.text}>Você precisa nos enviar uma foto sua.</Text>

      <RectButton style={styles.button} onPress={abrirCamera}>
        <Text style={styles.textButton}>Tirar uma foto</Text>
      </RectButton>
      <RectButton
        style={styles.button}
        onPress={() => Alert.alert("Pronto!", "Foto enviada.")}
      >
        <Text style={styles.textButton}>Enviar</Text>
      </RectButton>
    </View>
  );
}

export default Detail;
