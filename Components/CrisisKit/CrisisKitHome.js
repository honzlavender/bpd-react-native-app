import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import BackHomeNav from "../Misc/HomeButton";
import Footer from "../Misc/Footer";
import NavDotLeft from "./NavDotLeft";
import NavDotRight from "./NavDotRight";

export default function CrisisKitHome({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BackHomeNav navigation={() => navigation.navigate("Home")} />
        <View style={styles.headerContainer}>
          <Image
            source={require("../graphics/sunshine.png")}
            style={styles.image}
          />
          <View style={styles.textView}>
            <Text style={styles.title}>{"crisis kit"}</Text>
          </View>
        </View>
        <View style={styles.body}>
          {/* word game */}
          <NavDotLeft
            navigation={() => navigation.navigate("SongWordCount")}
            title="word count game"
            dot={require("../graphics/blueDot.png")}
          />
          <NavDotRight
            navigation={() => navigation.navigate("Sketch")}
            title="sketch pad"
            dot={require("../graphics/purpleDot.png")}
          />
          <NavDotLeft
            navigation={() => navigation.navigate("BabyAnimals")}
            title="cats & dogs for your woes"
            dot={require("../graphics/redDot.png")}
          />
          <NavDotRight
            navigation={() => navigation.navigate("FlappyBird")}
            title="flappy bird"
            dot={require("../graphics/limeDot.png")}
          />
          <NavDotLeft
            navigation={() => navigation.navigate("MemoryGame")}
            title="memory game"
            dot={require("../graphics/yellowDot.png")}
          />
          <NavDotRight
            navigation={() => navigation.navigate("IRLKit")}
            title="IRL crisis kit"
            dot={require("../graphics/pinkDot.png")}
          />
          <NavDotLeft
            navigation={() => navigation.navigate("Hotlines")}
            title="hotlines"
            dot={require("../graphics/tealDot.png")}
          />

          <NavDotLeft
            navigation={() => navigation.navigate("Practice")}
            title="practice"
            dot={require("../graphics/tealDot.png")}
          />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 0,
    padding: 0,
  },
  textView: {
    position: "absolute",
  },
  title: {
    marginTop: 75,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    resizeMode: "contain",
    margin: -35,
    width: 250,
    height: 250,
  },
  //body holds dots
  body: {
    // marginTop: 5,
  },
});
