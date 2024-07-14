import React from "react";
import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";

import Header from "../components/Header";
import Restaurant from "../components/Restaurant";
import fridaysImage from "../../assets/fridays.png";
import appleBeesImage from "../../assets/Applebees.jpg";
const restaurants = [
  {
    title: "The Muffin Man Bakery",
    rating: 3,
    category: "Desserts, Cakes and Bakery",
    location: "35 min",
    distance: "3.7 km",
    image: require("../../assets/the-muffin-man-bakery.jpg"),
    id: 1,
  },
  {
    title: "Central Perk Coffee House",
    rating: 3,
    category: "Beverages, Desserts, Cakes and Bakery",
    location: "45 min",
    distance: "4.3 km",
    image: require("../../assets/central-perk.jpg"),
    id: 2,
  },
  {
    title: "WildBread Bakery",
    rating: 3,
    category: "Cakes and Bakery, American, Sandwiches, Burgers",
    location: "25 min",
    distance: "3 km",
    image: require("../../assets/wildbread-bakery.jpg"),
    id: 3,
  },
  {
    title: "McDonald's",
    rating: 3,
    category: "Fast Food, Burgers, Desserts",
    location: "20 min",
    distance: "2.5 km",
    image: require("../../assets/mcdo.jpg"),
    id: 4,
  },
  {
    title: "Jollibee",
    rating: 3,
    category: "Fast Food, Burgers, Desserts",
    location: "25 min",
    distance: "3.1 km",
    image: require("../../assets/jollibee.jpg"),
    id: 5,
  },
  {
    title: "Fridays",
    rating: 3,
    image: fridaysImage,
    category: "American, Sports bar",
    location: "Baltimore, MD",
    distance: "20 miles",
    id: 6,
  },
  {
    title: "AppleBees",
    rating: 3.7,
    image: appleBeesImage,
    category: "American, Sports bar",
    location: "Silver Spring, MD",
    distance: "30 miles",
    id: 7,
  },
];
function HomeScreen() {
  const renderItem = ({ item }) => (
    <Restaurant
      title={item.title}
      rating={item.rating}
      image={item.image}
      category={item.category}
      distance={item.distance}
      location={item.location}
    />
  );
  return (
    <View style={styles.container}>
      <Header label="Food Central" />
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Use the unique id as the key
        showsVerticalScrollIndicator={false}
      />

      <StatusBar barStyle="dark-content" />
      {/* other options: default, light-content */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6c5ce7",
    alignItems: "center", // horizontal alighnment of content
    //justifyContent: "center", //vericle alighnment of content
  },
});
export default HomeScreen;
/* {restaurants.map((restaurant) => (
        <Restaurant
          title={restaurant.title}
          rating={restaurant.rating}
          image={restaurant.image}
          category={restaurant.category}
          distance={restaurant.distance}
          location={restaurant.location}
        />
      ))} */
