import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import GoBackNav from "../Misc/GoBackNav";



export default function BabyAnimals({ navigation }) {

// function to perform a get request
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

// function to get a random image
const getRandomImage = () =>
{
  // get the json from the server
  var json = httpGet('https://dog.ceo/api/breeds/image/random');
  console.log(json);

  // decode the json into an array
  var array = JSON.parse(json);
  console.log(array);
  
  // get the image url from the array
  var url = array.message;
  console.log(url);
  
  // get the image object
  var image = document.getElementById('dogImage');
  
  // set the src of the image object
  image.src = url;
}


  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
        <Text style={styles.playListLink}>{"baby animals"}</Text>
        <Image
          style={{width: 100, height: 100}}
          source={{uri:'https://dog.ceo/img/dog-api-logo.svg'}}
      />
      <Button title="nasty" onPress={getRandomImage}/>
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
    margin: 36,
    fontSize: 32,
    fontWeight: 'bold',
  },
});