// sketch.js

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GoBackNav from "../Misc/GoBackNav";
import { useEffect, useRef, useState } from "react";
import Canvas from "react-native-canvas";

export default function Sketch({ navigation }) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // const refreshDrawing = () => {
  //   // this.reload();
  //   Sketch.reload();
  // }

  useEffect(() => {
    const canvas = canvasRef.current;

    // const handleCanvas = (canvas) => {
    // if (canvas === null) {
    //   return;
    // }
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.fillStyle = "pink";
    ctx.fillRect(20, 20, 300, 300);
    // }
  });

  const startDrawing = ({ nativeEvent }) => {
    //how to start a path?
    // alert('wow')
    // const { offsetX, offsetY } = nativeEvent;
    // contextRef.beginPath();
    // contextRef.moveTo(offsetX, offsetY);
    // setIsDrawing(true);
  };

  const endDrawing = () => {
    //how to end a path?
    // alert('u did it')
    // contextRef.closePath();
    // setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    //how to connect path??
    // if (!isDrawing) {
    //   return;
    // }
    // const { offsetX, offsetY } = nativeEvent;
    // contextRef.lineTo(offsetX, offsetY);
    // contextRef.stroke();
  };

  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
      <Text style={styles.sketchText}>{"sketch pad"}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Sketch")}>
        <Text style={styles.button}>refresh</Text>
      </TouchableOpacity>

      <View
        onTouchStart={startDrawing}
        onTouchEnd={endDrawing}
        onTouchMove={draw}
      >
        <Canvas
          // onTouchStart={startDrawing}
          // onTouchEnd={endDrawing}
          // onTouchMove={draw}
          ref={canvasRef}
        />
      </View>
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
    margin: 36,
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    color: "white",
    backgroundColor: "blue",
    width: 100,
    padding: 24,
    margin: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
