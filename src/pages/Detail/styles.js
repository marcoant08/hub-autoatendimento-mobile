import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},

  containerFoto: {
    backgroundColor: "#a020f0",
    alignItems: "center",
    paddingVertical: 40,
  },

  foto: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderWidth: 2,
    borderColor: "#fff",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 10,
  },

  button: {
    height: 50,
    backgroundColor: "#a020f0",
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  textButton: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
