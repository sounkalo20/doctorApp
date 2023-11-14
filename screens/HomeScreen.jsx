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
import { FakeActivity, FakeSymptome } from "../outils/data";
import ActivityItem from "../components/ActivityItem";
import SymptomeItem from "../components/SymptomeItem";

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
          return <ActivityItem item={item} />;
        }}
      />

      {/* liste des symptomes */}
      
      <View style={styles.title}>
        <Text style={{fontWeight: 'bold'}}>Quels Symptomes avez vous ?</Text>
      </View>

      <FlatList
        horizontal={true}
        data={FakeSymptome}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListeContainer}
        renderItem={({ item }) => {
          return <SymptomeItem item={item}/>;
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
  title : {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  userName: {
    fontSize: 17,
    fontWeight: "bold",
  }
});
