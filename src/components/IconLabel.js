import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const IconLabel = (props) => {
  return (
    <View style={styles.container}>
      <Icon name={props.name} type={props.type} color={props.color} size={13} />
      <Text style={styles.labelStyle}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    marginLeft: 5,
  },
  container: {
    flexDirection: "row",
    marginRight: 40,
  },
});

export default IconLabel;
