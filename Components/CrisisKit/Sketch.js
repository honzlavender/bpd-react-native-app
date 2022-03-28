// sketch.js

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Share
} from "react-native";
import GoBackNav from "../Misc/GoBackNav";
import { useRef } from "react";
import { Canvas } from "@benjeau/react-native-draw";
import { captureRef } from "react-native-view-shot";

export default function Sketch({ navigation }) {
  //hands sketch, undo and clear
  const viewRef = useRef();
  const canvasRef = useRef(null);

  const handleUndo = () => {
    canvasRef.current?.undo();
  };

  const handleClear = () => {
    canvasRef.current?.clear();
  };

  //share and save
  const onShare = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.7,
      });
      await Share.share({ url: uri })
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
      <Text style={styles.sketchText}>{"sketch pad"}</Text>
      <Button title="Undo" onPress={handleUndo} />
      <Button title="Clear" onPress={handleClear} />

      <View ref={viewRef}>
      <Canvas style={styles.canvas} ref={canvasRef} />
      </View>
      <Button title="Share" onPress={onShare} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sketchText: {
    textAlign: "center",
    // margin: 36,
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    color: "white",
    backgroundColor: "lightblue",
    width: 100,
    padding: 24,
    margin: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  canvas: {
    height: 300,
    backgroundColor: 'lightblue'
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
