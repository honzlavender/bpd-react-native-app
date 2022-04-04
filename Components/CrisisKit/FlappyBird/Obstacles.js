import React from "react";
import { View } from "react-native";

export default function Obstacles({
  color,
  obstacleWidth,
  obstacleHeight,
  randomBottom,
  gap,
  obstaclesLeft,
}) {
  return (
    <>
      <View
        style={{
          borderRadius: 50,
          position: "absolute",
          backgroundColor: color,
          width: obstacleWidth,
          height: 500,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      ></View>
      <View
        style={{
          borderRadius: 50,
          position: "absolute",
          backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      ></View>
    </>
  );
}
