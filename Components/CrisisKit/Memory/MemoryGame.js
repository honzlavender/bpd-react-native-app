import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
// import GoBackNav from "../../Misc/GoBackNav";
import GoBackNav from "../../Misc/GoBackNav";
import Card from "./Card";
import Footer from "../../Misc/Footer";

export default function MemoryGame({ navigation }) {
  const [cardSymbols, setCardSymbols] = useState({
    emoji: ["🥺", "🤓", "🤠", "😵‍💫", "🥲", "😍", "😎", "😭"],
  });
  const [cardRandom, setCardRandom] = useState([]);
  const [isOpen, setIsOpen] = useState([]);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [step, setStep] = useState(0);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (firstPick != secondPick) {
      gameResult();
    }
  }, [firstPick, secondPick]);

  const initGame = () => {
    let newCards = [...cardSymbols.emoji, ...cardSymbols.emoji];
    let cardRandom = shuffleArray(newCards);
    let isOpen = [];
    for (let i = 0; i < newCards.length; i++) {
      isOpen.push(false);
    }
    setCardRandom(cardRandom);
    setIsOpen(isOpen);
  };

  const shuffleArray = (arr) => {
    const newArray = arr.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[random]] = [newArray[random], newArray[i]];
    }
    return newArray;
  };

  const cardPressHandler = (index) => {
    let open = [...isOpen];
    if (open[index]) {
      return;
    }
    open[index] = true;

    if (firstPick == null && secondPick == null) {
      setIsOpen(open);
      setFirstPick(index);
    } else if (firstPick != null && secondPick == null) {
      setIsOpen(open);
      setSecondPick(index);
    }
    setStep(step + 1);
  };

  const gameResult = () => {
    if (firstPick != null && secondPick != null) {
      if (cardRandom.length > 0) {
        let totalOpens = isOpen.filter((isOpen) => isOpen);
        if (totalOpens.length === cardRandom.length) {
          setEnd(true);
          return;
        }
      }

      let firstSymbol = cardRandom[firstPick];
      let secondSymbol = cardRandom[secondPick];
      if (firstSymbol != secondSymbol) {
        setTimeout(() => {
          let open = [...isOpen];
          open[firstPick] = false;
          open[secondPick] = false;

          setFirstPick(null);
          setSecondPick(null);
          setIsOpen(open);
        }, 1000);
      } else {
        setFirstPick(null);
        setSecondPick(null);
      }
    }
  };

  const resetGame = () => {
    initGame();
    setFirstPick(null);
    setSecondPick(null);
    setStep(0);
    setEnd(false);
  };

  return (
    <View style={styles.page}>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image
          source={require("../../../assets/graphics/pinkDot.png")}
          style={styles.dot}
        />
        <View style={styles.main}>
          <View style={styles.gameBoard}>
            {cardRandom.map((symbol, index) => (
              <Card
                key={index}
                onPress={() => cardPressHandler(index)}
                style={styles.button}
                fontSize={30}
                title={symbol}
                // cover="❓"
                isShow={isOpen[index]}
              />
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          {/* {end ? ( */}
            <TouchableOpacity onPress={resetGame} style={styles.tryAgainButton}>
              <Text style={styles.tryAgainButtonText}>Play Again!</Text>
            </TouchableOpacity>
          {/* // ) : null} */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#be4b57",
  },
  container: {
    flex: 1,
    backgroundColor: "#be4b57",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    margin: 12,
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  main: {
    flex: 3,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gameBoard: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: '#ff6c7c',
    paddingTop: 25,
    borderRadius: 50,
    marginHorizontal: 26,
    marginTop: 45,
    maxHeight: 400,
  },
  tryAgainButton: {
    backgroundColor: "pink",
    // backgroundColor: "#005b7d",
    padding: 8,
    marginTop: -250,
    borderRadius: 8,
  },
  tryAgainButtonText: {
    // ff6c7c
    // color: "#005b7d",
    color: "#ff6c7c",
    textAlign: "center",
    fontSize: 28,
    padding: 8,
    fontFamily: "Fredoka-Bold",
  },
});
