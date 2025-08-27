import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#4D4D4D",
    borderColor: "#fff",
    borderWidth: 2
  },
  inputContainer: {
    width: "80%",
    flexDirection: "column",
    alignItems: "center"
  }
});