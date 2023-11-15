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
import { COLORS, PADDING } from "../outils/constantes";
import { FakeActivity, FakeDoctor, FakeSymptome } from "../outils/data";
import ActivityItem from "../components/ActivityItem";
import SymptomeItem from "../components/SymptomeItem";
import DoctorCard from "../components/DoctorCard";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <ScrollView>
      {/* Zone du Header */}
      <Header nom={"Sounkalo"} image={require("./../assets/profil.jpg")} />

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
        <Text style={{ fontWeight: "bold" }}>Quels Symptomes avez vous ?</Text>
      </View>

      <FlatList
        horizontal={true}
        data={FakeSymptome}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListeContainer}
        renderItem={({ item }) => {
          return <SymptomeItem item={item} />;
        }}
      />

      {/* liste des Docteurs */}

      <View style={styles.title2}>
        <Text style={{ fontWeight: "bold" }}>Nos Docteurs</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Afficher tout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.doctorsContainer}>
        {FakeDoctor.map((docteur, index) => {
          return <DoctorCard item={docteur} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  title2: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatListeContainer: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  link: {
    fontWeight: "300",
    fontStyle: "italic",
    color: COLORS.main,
  },
  doctorsContainer: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
});
