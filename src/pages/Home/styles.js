import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonOptionsContainer: {
    height: 30,
    backgroundColor: "#A020F0",
    alignItems: "center",
    //borderBottomEndRadius: 10,
    //borderBottomLeftRadius: 10,
  },

  containerOptions: {
    backgroundColor: "#a020f0",
    justifyContent: "center",
    alignItems: "center",
  },

  optionsBox: {
    height: 40,
    justifyContent: "center",
  },

  optionsText: {
    fontSize: 18,
    color: "#fff",
  },

  title: {
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
  },

  lineBreaker: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#A020F0",
  },

  lineBreaker2: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#fff",
    width: 200,
  },

  box: {
    height: 60,
    justifyContent: "center",
  },

  boxText: {
    fontSize: 18,
    padding: 10,
  },

  addReceitaButton: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#A020F0",
    justifyContent: "center",
    alignItems: "center",
  },

  containerButton: {
    alignItems: "center",
    position: "absolute",
    bottom: 80,
    right: 40,
  },
});

export default styles;
