import React, { useState } from "react";
import { Text, Pressable, ToastAndroid, Platform, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePassword from "../../services/passwordGenerator";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let generateToken = generatePassword();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
    const MESSAGE = "Copied to the clipboard"
    if(Platform.OS === "android") {
      ToastAndroid.show(MESSAGE, ToastAndroid.SHORT)
    } else {
      Alert.alert(MESSAGE)
    }
  }

  return (
    <>
      <BatTextInput password={pass} />
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>⚡ GENERATE</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>🖇️ COPY</Text>
      </Pressable>
    </>
  );
}
