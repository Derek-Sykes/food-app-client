import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Header = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{props.label}</Text>
    </View>
  );
};

const deviceDimensions = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: deviceDimensions.width,
    height: 90,
    backgroundColor: "#a29bfe",
    alignItems: "center", // horizontal alighnment of content
    justifyContent: "flex-end", //vericle alighnment of content
    paddingBottom: 20,
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Header;
