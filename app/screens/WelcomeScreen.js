import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import color from "../app/config/colors";
import AppButton from "../app/components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/LivingRoom.jpg")}
      style={styles.background}
    >
      <Image
        style={styles.logo}
        source={require("../assets/UnStuffLogo.png")}
      />
      <Text style={styles.tagline}>Unstuff Your Logo</Text>

      <AppButton title={"Login"} onPress={() => console.log("pressed")} />
      <AppButton title={"Register"} onPress={() => console.log("pressed")} />

      {/* <View style={styles.loginButton}>
        <Button title="Login" color="primary" />
      </View>
      <View style={styles.registerButton}>
        <Button title="Register" color="secondary" />
      </View> */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: color.primary,
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: color.secondary,
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 80,
  },
  tagline: {
    bottom: 400,
  },
});

export default WelcomeScreen;
