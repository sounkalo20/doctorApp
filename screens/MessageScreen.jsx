import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { FakeChats } from "../outils/data";
import MessageItem from "../components/MessageItem";
import { PADDING } from '../outils/constantes'


const MessageScreen = ({navigation}) => {
  return (
    <>
      <Header nom={"Sounkalo"} image={require("./../assets/profil.jpg")} />
      <FlatList
        data={FakeChats}
        keyExtractor={(item) => item.id}
        style={styles.root}
        renderItem={({ item }) => {
          return <MessageItem item={item} navigation={navigation}/>;
        }}
      />
    </>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  root : {
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
  }
});

