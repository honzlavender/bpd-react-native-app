import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import GoBackNav from "../Misc/GoBackNav";



export default function BabyAnimals({ navigation }) {



  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
        <Text style={styles.playListLink}>{"baby animals"}</Text>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  playListLink: {
    textAlign: "center",
    // margin: 36,
    fontSize: 32,
    fontWeight: 'bold',
  },
});