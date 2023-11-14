import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const ActivityItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.flatListeItem}>
      <Image source={item.image} style={styles.flatImage} />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItem;

const styles = StyleSheet.create({
  flatListeItem: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    paddingVertical: 15,
    marginRight: 15,
    elevation: 5,
    borderRadius: 8,
  },
  flatImage: {
    width: 100,
    height: 100,
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  subText: {
    marginTop: 10,
    fontSize: 12,
  },
});
