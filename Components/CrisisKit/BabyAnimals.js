import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
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
    <>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image source={{ uri: dog || null }} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={fetchDog}>
          <Text style={styles.text}>New Dog</Text>
        </TouchableOpacity>

        <Image source={{ uri: cat || null }} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={fetchCat}>
          <Text style={styles.text}>New Cat</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    margin: 24,
    padding: 12,
    borderRadius: 50,
    width: 150,
    backgroundColor: "lightblue",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
