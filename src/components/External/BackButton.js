import React from "react";
// import { render } from "react-dom";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

class BackButton extends React.Component{
  render() {
    const { goBack } = this.props;

    return (
      <TouchableOpacity onPress={goBack} style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/Ex/arrow_back.png")}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default BackButton;
