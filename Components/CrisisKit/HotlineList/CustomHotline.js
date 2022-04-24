import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddHotline from "./addHotline";
import HotlineItem from "./HotlineItem";

export default function CustomHotline() {
  const [hotlines, setHotlines] = useState([]);

  const pressHandler = (key) => {
    setHotlines((prevHotlines) => {
      return prevHotlines.filter((hotline) => hotline.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setHotlines((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "must be more than 3 characters", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("bye bye");
      }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {/** todo form */}
          <View style={styles.list}>
            <FlatList
              data={hotlines}
              renderItem={({ item }) => (
                <HotlineItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
          <AddHotline submitHandler={submitHandler} />

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 24,
  },
});
