import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { FakeChats } from "../outils/data";
import MessageItem from "../components/MessageItem";

const MessageScreen = () => {
  return (
    <>
      <Header nom={"Sounkalo"} image={require("./../assets/profil.jpg")} />
      <FlatList
        data={FakeChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MessageItem />;
        }}
      />
    </>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
