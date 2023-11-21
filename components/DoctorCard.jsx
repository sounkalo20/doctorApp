import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, PADDING } from "../outils/constantes";

const DoctorCard = ({ item }) => {
  return (
    <View style={styles.doctorCard}>
      <Image source={item.image} style={styles.doctorImg} />
      <View style={styles.doctorInfo}>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginBottom: 10
        }}>{item.nom}</Text>

        <TouchableOpacity style={{
          backgroundColor: COLORS.main,
          padding: 10,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: PADDING.horizontal,
        }}>
          <Text style={{
            color: 'white',
            fontSize: 14, 
          }}>{item.specialite}</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorCard;

const styles = StyleSheet.create({
  doctorCard: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom: 20,
    borderRadius: 7,
  },
  doctorImg: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginRight: 15,
  },
  doctorInfo : {

  }
});
