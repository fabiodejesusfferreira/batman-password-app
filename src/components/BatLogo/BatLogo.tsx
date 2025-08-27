import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./BatLogoStyles";
import batLogo from "../../../assets/bat-logo.png";

export function BatLogo() {
  return (
    <View>
      <Text style={styles.title}>Batman Password Generator</Text>
      <Image source={batLogo} style={styles.logo} />
    </View>
  );
}
