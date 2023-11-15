import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PADDING } from "../outils/constantes";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const MessageItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.messageContainer}
      onPress={() => navigation.navigate("Conversation", {item})}
    >
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        }}
        style={styles.messageImg}
      />

      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.nom}</Text>
          <Text>{dayjs(item.date).fromNow(true)}</Text>
        </View>
        <View>
          <Text>{item.last_message}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
    marginTop: 15,
    paddingVertical: PADDING.vertical,
    paddingHorizontal: PADDING.horizontal,
    borderRadius: 10,
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  messageInfo: {
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    textAlign: "justify",
  },
  date_name: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },
  name: {
    fontWeight: "bold",
    marginRight: 5,
  },
});
