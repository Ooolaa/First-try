import React from "react";
import { StyleSheet, Dimensions } from "react-native";

import { Background, Logo, ExButton } from "../../components/External";

import { Button, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <ExButton
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </ExButton>
      <ExButton
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
      </ExButton>
    </Background>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowRadius: 0,
    shadowOpacity: 0
  },
})
