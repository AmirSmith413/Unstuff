import React from "react";
import { StyleSheet, Image, View } from "react-native";
import colors from "../app/config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close"
          size={44}
          color="white"
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={44}
          color="white"
        ></MaterialCommunityIcons>
      </View>
      <Image style={styles.image} source={require("../assets/oldChair.jpg")} />
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  loginButton: {
    backgroundColor: "blue",
    height: 50,
    width: 50,
    position: "absolute",
    top: 5,
    right: 20,
  },
  deleteButton: {
    backgroundColor: "blue",
    height: 50,
    width: 50,
    position: "absolute",
    top: 5,
    right: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 60,
    right: 30,
  },
});

export default ViewImageScreen;
