import React from "react";
// import { render } from 'react-dom'
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

class Paragraph extends React.Component {
  render() {
    const { props } = this.props;
    return <Text style={styles.text} {...props} />;
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
});

export default Paragraph;
