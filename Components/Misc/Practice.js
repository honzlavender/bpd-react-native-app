import React from 'react';
import { Alert, Button, View } from 'react-native';

export default function MyPaint (){


  // render() {
    return (
      <View style={{ flex: 1 }}>

        <Button onPress={this.save} title="Save" />
      </View>
    );
  // }
}