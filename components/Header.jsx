import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, PADDING } from "../outils/constantes";
import React from "react";

const Header = ({nom , image}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.userName}>{nom}</Text>
      <Image
        source={image}
        style={styles.userImage}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: "white",
    paddingTop: 50,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  userName: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
