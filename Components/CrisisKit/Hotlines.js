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
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  function resetTextInput() {
    setName("");
    setNumber("");
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="someone you trust..."
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="phone number"
        onChangeText={(number) => setNumber(number)}
        value={number}
      />
      <TouchableOpacity
        style={styles.addNumberButton}
        onPress={() => {
          submitHandler(name, number);
          resetTextInput();
        }}
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
            <Text style={styles.hotlineText}>
              <AntDesign name="phone" size={20} color="#303746" />
              {" Call & Oats"}
            </Text>
          </TouchableOpacity>
          <Text style={styles.subhead}>
            you know who can help you best{"\n"}add your own people & numbers
          </Text>

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
    color: '#303746',
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
    color: '#303746',
  },
  subhead: {
    textAlign: "center",
    fontFamily: "Fredoka-Regular",
    fontSize: 16,
    color: '#00ac1d'
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
