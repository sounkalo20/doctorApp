import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { PADDING } from "../outils/constantes";
import { FakeActivity } from "../outils/data";
import DoctorSvg from './../assets/doctor1.svg'
import { Svg, SvgUri } from "react-native-svg";

const HomeScreen = () => {
  return (
    <ScrollView>
      {/* Debut du header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Jhon Doe</Text>
        <Image
          source={require("./../assets/profil.jpg")}
          style={styles.userImage}
        />
      </View>
      {/* fin du header */}

      {/* liste des activites */}
      <FlatList
        horizontal={true}
        data={FakeActivity}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListeContainer}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.flatListeItem}>
              <SvgUri width="200" height="200" uri={DoctorSvg}/>
              <Text style={styles.mainText}>{item.mainText}</Text>
              <Text style={styles.subText}>{item.subText}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;

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
  flatListeContainer : {
    paddingHorizontal : PADDING.horizontal,
    paddingVertical: PADDING.vertical
  },
  flatListeItem : {
    paddingHorizontal: 15,
    backgroundColor : 'white',
    paddingVertical : 15,
    marginRight: 15,
    elevation: 5,
    borderRadius: 10
  },
  mainText : {
    fontWeight : 'bold',
    fontSize: 15
  },
  subText : {
    marginTop : 10,
    fontSize : 12
  }
});
