import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Bird from "./Bird";
import Obstacles from "./Obstacles";
import GoBackNav from "../../Misc/GoBackNav";

export default function FlappyBird({ navigation }) {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const [birdLeft, setBirdLeft] = useState(screenWidth / 2);
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2 + 30
  );
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gravity = 3;
  let obstacleWidth = 60;
  let obstacleHeight = 300;
  let gap = 200;
  let gameTimerId;
  let obstaclesTimerId;
  let obstaclesTimerIdTwo;

  //start bird falling
  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom((birdBottom) => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      };
    }
    //if i dont have birdBottom as a dependecy, it wont stop
  }, [birdBottom]);
  console.log(birdBottom);

  const jump = () => {
    if (!isGameOver && birdBottom < screenHeight) {
      setBirdBottom((birdBottom) => birdBottom + 50);
      console.log("jumped");
    }
  };

  //start first obstacle
  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesTimerId);
      };
    } else {
      setScore((score) => score + 1);
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);

  //start second obstacle
  useEffect(() => {
    if (obstaclesLeftTwo > -60) {
      obstaclesTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesTimerIdTwo);
      };
    } else {
      setScore((score) => score + 1);
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(-Math.random() * 100);
    }
  }, [obstaclesLeftTwo]);

  //check for collisions
  useEffect(() => {
    console.log(obstaclesLeft);
    console.log(screenWidth / 2);
    console.log(obstaclesLeft > screenWidth / 2);
    if (
      ((birdBottom < obstaclesNegHeight + obstacleHeight + 30 ||
        birdBottom > obstaclesNegHeight + obstacleHeight + gap - 30) &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      ((birdBottom < obstaclesNegHeightTwo + obstacleHeight + 30 ||
        birdBottom > obstaclesNegHeightTwo + obstacleHeight + gap - 30) &&
        obstaclesLeftTwo > screenWidth / 2 - 30 &&
        obstaclesLeftTwo < screenWidth / 2 + 30)
    ) {
      console.log("game over");
      gameOver();
    }
  });

  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesTimerId);
    clearInterval(obstaclesTimerIdTwo);
    setIsGameOver(true);
  };

  const resetGame = () => {
    setBirdLeft(screenWidth / 2);
    setBirdBottom(screenHeight / 2);
    setObstaclesLeft(screenWidth);
    setObstaclesLeftTwo(screenWidth + screenWidth / 2 + 30);
    setObstaclesNegHeight(0);
    setObstaclesNegHeightTwo(0);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
      {/* <Text style={styles.playListLink}>{"flap that bird"}</Text> */}
      <TouchableWithoutFeedback onPress={jump}>
        <View style={styles.container}>
          {isGameOver && (
            <TouchableOpacity style={styles.gameOver} onPress={resetGame}>
              <Text style={styles.score}>Score: {score}</Text>
              <Text style={styles.buttonText}>refresh</Text>
            </TouchableOpacity>
          )}

          <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
          <Obstacles
            color={"green"}
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeight}
            gap={gap}
            obstaclesLeft={obstaclesLeft}
          />
          <Obstacles
            color={"yellow"}
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeightTwo}
            gap={gap}
            obstaclesLeft={obstaclesLeftTwo}
          />
        </View>
      </TouchableWithoutFeedback>
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
    fontWeight: "bold",
  },
  buttonText: {
    color: "white",
    backgroundColor: "pink",
    width: 100,
    borderRadius: 30,
    padding: 14,
    margin: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  score: {
    padding: 14,
    // margin: 24,
    fontWeight: "bold",
    // textAlign: "center",
  }
});
