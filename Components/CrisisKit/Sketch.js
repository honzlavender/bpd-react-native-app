// sketch.js

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Share,
  ScrollView,
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
        format: "png",
        quality: 0.7,
      });
      await Share.share({ url: uri });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.pageContainer}>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image
          source={require("../graphics/yellowDot.png")}
          style={styles.dot}
        />
        {/* <Text style={styles.sketchText}>{"sketch pad"}</Text> */}
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={handleUndo}>
            <Text style={styles.topButtText}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleClear}>
            <Text style={styles.topButtText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sketchText}>{"draw a corndog"}</Text>
        <View ref={viewRef} style={styles.frame}>
          <Canvas
            color="#005014"
            thickness={10}
            style={styles.canvas}
            ref={canvasRef}
          />
        </View>
        <TouchableOpacity style={styles.shareButton} onPress={onShare}>
          <Text style={styles.shareText}>share & save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#005014",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  sketchText: {
    fontFamily: "Fredoka-Regular",
    textAlign: "center",
    fontSize: 14,
    marginBottom: -35,
    zIndex: 10,
    fontWeight: "bold",
  },
  canvas: {
    zIndex: -1,
    width: 325,
    height: 500,
    borderRadius: 50,
  },
  shareButton: {
    marginTop: -30,
    borderRadius: 50,
    width: 150,
    backgroundColor: "#ffdb00",
    padding: 20,
  },
  topButtons: {
    flexDirection: "row",
    paddingBottom: 18,
  },
  topButtText: {
    fontFamily: "Fredoka-Bold",
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 20,
    color: "#fff",
    padding: 8,
    textTransform: "uppercase",
  },
  shareText: {
    fontFamily: "Fredoka-Bold",
    textAlign: "center",
    color: "#303746",
    fontSize: 14,
    textTransform: "uppercase",
    padding: 2,
  },
  dot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
  },
});
