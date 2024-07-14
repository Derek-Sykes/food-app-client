import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import IconLabel from "../components/IconLabel";

const iconColor = "purple";

const Restaurant = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={props.image} style={styles.image} resizeMode="stretch" />
        <View style={styles.infoStyle}>
          <View style={styles.topRowStyle}>
            <Text style={styles.titleStyle}>{props.title}</Text>
            <Text>Rating: {props.rating}</Text>
          </View>

          <Text style={styles.categoryStyle}>{props.category}</Text>
          <View style={styles.bottomRowStyle}>
            <IconLabel
              name="time-outline"
              type="ionicon"
              label={props.distance}
              color={iconColor}
            />
            <IconLabel
              name="pin-outline"
              type="ionicon"
              label={props.location}
              color={iconColor}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceDimensions = Dimensions.get("window");
const offset = 40;
const radius = 20;
const styles = StyleSheet.create({
  container: {
    width: deviceDimensions.width - 20,
    alignItems: "center",
  },
  cardContainer: {
    height: 200,
    width: deviceDimensions.width - offset,
    backgroundColor: "#a29bfe",
    borderRadius: radius,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    margin: 15,
  },
  image: {
    height: 130,
    width: deviceDimensions.width - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
  },
  categoryStyle: {
    fontWeight: "200",
  },
  infoStyle: {
    marginHorizontal: 10,
  },
  topRowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomRowStyle: {
    flexDirection: "row",
    marginTop: 7,
  },
});

export default Restaurant;
