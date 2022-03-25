import React, { useCallback, useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import axios from "axios";

export default function Practice( {navigation}) {
  const DogAPI = axios.create({
    baseURL: 'https://api.thedogapi.com',
  });

  const onPress = () => {
    fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

  }


  return (
    <View>
      <Image source={{ uri: 'https://i.ytimg.com/vi/fmaiEWLdU6Q/sddefault.jpg'}} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>SuperLike</Text>
      </TouchableOpacity>
    </View>
  );
}
//'https://dog.ceo/api/breeds/image/random'

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  button: {
    backgroundColor: 'pink'
  }
});

