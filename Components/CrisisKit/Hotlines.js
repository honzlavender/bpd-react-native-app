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
import { useState } from "react";
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
  const initialFormState = {
    person: "",
    number: "",
  };
  const [formData, setFormData] = useState({...initialFormState});

  const changeHandler = (formData) => {
    setFormData(formData);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="someone you trust..."
        onChangeText={changeHandler}
        value={formData.person}
      />
      <TextInput
        style={styles.input}
        placeholder="phone number"
        onChangeText={changeHandler}
        value={formData.number}
      />
      <TouchableOpacity
        style={styles.addNumberButton}
        onPress={() => submitHandler(formData)}
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

  const submitHandler = (...formData) => {
    if (!formData) {
      Alert.alert("add some info");
    } else {
      setHotlines((prevHotlines) => {
        return [
          {
            person: formData,
            number: formData,
            key: Math.random().toString(),
          },
          ...prevHotlines,
        ];
      });
    }
  };
  // const submitHandler = (formData) => {
  //   if (formData.length) {
  //     setHotlines((prevTodos) => {
  //       return [
  //         { name: formData, key: Math.random().toString() },
  //         ...prevTodos,
  //       ];
  //     });
  //   } else {
  //     Alert.alert("OOPS", "must be more than 3 characters", [
  //       { text: "my bad" },
  //     ]);
  //   }
  // };

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
