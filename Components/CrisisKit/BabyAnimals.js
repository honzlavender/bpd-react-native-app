import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import GoBackNav from "../Misc/GoBackNav";

export default function BabyAnimals({ navigation }) {
  const [dog, setDog] = useState("");
  const [cat, setCat] = useState("");

  const fetchDog = async () => {
    const response = await fetch("https://api.thedogapi.com/v1/images/search");
    const data = await response.json();
    const url = data[0].url;
    setDog(url);
  };

  const fetchCat = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    const url = data[0].url;
    setCat(url);
  };

  useEffect(() => {
    fetchDog();
    fetchCat();
  }, []);

  return (
    <ScrollView style={styles.pageContainer}>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image source={require("../graphics/tealDot.png")} style={styles.dot} />
        {/* fetch dog api */}
        <ImageBackground
          source={require("../graphics/frame.png")}
          style={styles.frame}
          resizeMode="cover"
        >
          <Image source={{ uri: dog || null }} style={styles.image} />
        </ImageBackground>

        <TouchableOpacity style={styles.button} onPress={fetchDog}>
          <Text style={styles.text}>next dog</Text>
        </TouchableOpacity>

        {/* fetch cat api */}
        <ImageBackground
          source={require("../graphics/frame.png")}
          style={styles.frame}
          resizeMode="cover"
        >
          <Image source={{ uri: cat || null }} style={styles.image} />
        </ImageBackground>

        <TouchableOpacity style={styles.button} onPress={fetchCat}>
          <Text style={styles.text}>next cat</Text>
        </TouchableOpacity>

        {/* baby snoopy */}
        <ImageBackground
          source={require("../graphics/frame.png")}
          style={styles.frame}
          resizeMode="cover"
        >
          <Image
            source={require("../graphics/babySnoopy.jpg")}
            style={styles.image}
          />
        </ImageBackground>

        {/* curly joe */}
        {/* <ImageBackground
          source={require("../graphics/frame.png")}
          style={styles.frame}
          resizeMode="cover"
        >
          <Image
            source={require("../graphics/curlyJoe.jpg")}
            style={styles.image}
          />
        </ImageBackground> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#ffdb0050",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    margin: 12,
    resizeMode: "contain",
    width: 60,
    height: 60,
  },
  frame: {
    flex: 1,
    height: 300,
    width: 330,
  },
  image: {
    marginTop: 50,
    resizeMode: "cover",
    zIndex: -1,
    height: 200,
    width: 200,
    margin: 20,
    alignSelf: "center",
  },
  button: {
    // margin: 60,
    marginTop: -65,
    marginBottom: 65,
    padding: 4,
    // borderColor: '#2c0e00',
    borderWidth: 2,
    borderRadius: 5,
    width: 125,
    backgroundColor: "#ffdb0085",
  },
  text: {
    fontSize: 18,
    color: "#2c0e00",
    textAlign: "center",
    fontFamily: "Fredoka-Regular",
  },
});
