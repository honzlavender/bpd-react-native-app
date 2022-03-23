import React from "react";
import { Alert, Button, View } from "react-native";

export default function Practice() {
  // constructor(props)
  //   super(props);

  this.state = {
    imageUrl: "https://dog.ceo/img/dog-api-logo.svg",
  };

  this.getImage = () => {
    fetch("https://api.unsplash.com/photos/random/?client_id=_____________")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.urls.regular);
        this.setState({ imageUrl: resJson.urls.regular });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log('set state run')
  // console.log(this.state)

  return (
    <View>
      <Button
        onPress={this.getImage}
        title="PRESS ME"
        color="#841584"
        accessibilityLabel="Click this button to get a random image"
      />

      <Image
        source={{ uri: this.state.imageUrl }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
