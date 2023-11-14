import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { PADDING } from "../outils/constantes";

const SymptomeItem = ({ item }) => {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <Image source={item.image} style={styles.itemImg}/>
        <Text>{item.libelle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SymptomeItem;
const styles = StyleSheet.create({
  item : {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 7,
    marginRight : 20,
  },
  itemImg: {
    width: 40,
    height: 40,
    borderRadius: 50/2,
    marginRight: 15
  }
});