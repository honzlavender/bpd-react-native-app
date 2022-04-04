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
      <TouchableWithoutFeedback onPress={jump}>
        <View style={styles.container}>
          <Bird birdBottom={birdBottom} birdLeft={birdLeft} />
          <Obstacles
            color={"#ff6c7c"}
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeight}
            gap={gap}
            obstaclesLeft={obstaclesLeft}
          />
          <Obstacles
            color={"#ff5900"}
            obstacleWidth={obstacleWidth}
            obstacleHeight={obstacleHeight}
            randomBottom={obstaclesNegHeightTwo}
            gap={gap}
            obstaclesLeft={obstaclesLeftTwo}
          />
          {isGameOver && (
            <TouchableOpacity style={styles.gameOver} onPress={resetGame}>
              <Text style={styles.score}>Score: {score}</Text>
              <Text style={styles.buttonText}>play again</Text>
            </TouchableOpacity>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191c24",
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontFamily: "Fredoka-Regular",
    // padding: 14,
    // margin: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  score: {
    textTransform: 'uppercase',
    fontFamily: "Fredoka-Bold",
    fontSize: 42,
    color: '#191c24',
    fontWeight: "bold",
    textAlign: "center",
  },
  gameOver: {
    margin: 25,
    justifyContent: 'center',
    backgroundColor: "pink",
    borderRadius: 100,
    width: 200,
    height: 200,
  }
});
