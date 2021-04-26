import React from "react";
import { Image, StyleSheet } from "react-native";

class Logo extends React.Component {
  render() {
    return (
      <Image source={require("../../assets/Ex/logo.png")} style={styles.image} />
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});

export default Logo;
