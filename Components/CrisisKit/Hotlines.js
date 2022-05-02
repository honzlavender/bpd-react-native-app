import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import GoBackNav from "../Misc/GoBackNav";
import * as Linking from "expo-linking";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";

const HotlineItem = ({ item, deleteHandler }) => {
  return (
    <TouchableOpacity onPress={() => deleteHandler(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.person}</Text>
        <Text style={styles.itemText}>{item.number}</Text>
        <AntDesign name="delete" size={24} color="#333" />
      </View>
    </TouchableOpacity>
  );
};

const AddHotline = ({ submitHandler }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameChangeHandler = (name) => {
    setName(name);
  };

  const numberChangeHandler = (number) => {
    setNumber(number);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="someone you trust..."
        onChangeText={nameChangeHandler}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="phone number"
        onChangeText={numberChangeHandler}
        value={number}
      />
      <TouchableOpacity
        style={styles.addNumberButton}
        onPress={() => submitHandler(name, number)}
      >
        <Text style={styles.addNumber}>add number</Text>
        <AntDesign name="pluscircle" size={18} color="#303746" />
      </TouchableOpacity>
    </View>
  );
};

export default function Hotlines({ navigation }) {
  const [hotlines, setHotlines] = useState([]);

  const deleteHandler = (key) => {
    setHotlines((prevHotlines) => {
      return prevHotlines.filter((hotline) => hotline.key != key);
    });
  };

  const submitHandler = (name, number) => {
    if (!name || !number) {
      Alert.alert("add some info");
    } else {
      setHotlines((prevHotlines) => {
        return [
          {
            person: name,
            number: number,
            key: Math.random().toString(),
          },
          ...prevHotlines,
        ];
      });
    }
  };


  useEffect(() => {
    const json = localStorage.getItem("hotlineList");
    const loadedNumbers = JSON.parse(json);
    if (loadedNumbers) {
      setHotlines(loadedNumbers);
    }
    const newJson = JSON.stringify(hotlines);
    localStorage.setItem("hotlineList", newJson);
  }, [hotlines]);

  // useEffect(() => {
  //   const json = JSON.stringify(list);
  //   localStorage.setItem("list", json);
  // }, [list]);

  return (
    <View style={styles.pageContainer}>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image
          source={require("../../assets/graphics/purpleDot.png")}
          style={styles.dot}
        />
        <View style={styles.numberBox}>
          <Text style={styles.hotlineTitle}>Life-saving Hotlines</Text>

          <TouchableOpacity
            style={styles.hotlines}
            onPress={() => {
              Linking.openURL("tel://+1-719-266-2837");
            }}
          >
            <Text style={styles.hotlineText}>Call & Oats</Text>
          </TouchableOpacity>

          <FlatList
            data={hotlines}
            renderItem={({ item }) => (
              <HotlineItem item={item} deleteHandler={deleteHandler} />
            )}
          />
          <AddHotline submitHandler={submitHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 50,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "#c2fbcc",
  },
  dot: {
    resizeMode: "contain",
    alignItems: "center",
    width: 75,
    height: 75,
    marginBottom: 48,
  },
  numberBox: {
    padding: 16,
    backgroundColor: "#00ac1d50",
    borderRadius: 50,
    width: 325,
    height: 500,
  },
  hotlines: {},
  hotlineTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Fredoka-Bold",
    fontSize: 32,
    padding: 12,
  },
  hotlineText: {
    textAlign: "center",
    fontFamily: "Fredoka-Regular",
    fontSize: 24,
    padding: 12,
  },
  input: {
    textAlign: "center",
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingVertical: 6,
    width: 200,
    alignSelf: "center",
    borderRadius: 50,
  },
  addNumber: {
    textAlign: "center",
    fontFamily: "Fredoka-Bold",
    color: "#303746",
    marginRight: 12,
  },
  addNumberButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
  },
  itemText: {
    flex: 1,
    marginLeft: 10,
  },
});
