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
            {/* <Text style={styles.title}>{"When I'm *in it* the last thing I want to do is meditate or be alone in my mind"}</Text> */}
          </View>
        </View>
        <View style={styles.body}>
          {/* word game */}
          <NavDotLeft
            navigation={() => navigation.navigate("SongWordCount")}
            title="music & mindfulness"
            dot={require("../graphics/blueDot.png")}
          />
          <NavDotRight
            navigation={() => navigation.navigate("Sketch")}
            title="sketch pad"
            dot={require("../graphics/purpleDot.png")}
          />
          <NavDotLeft
            navigation={() => navigation.navigate("BabyAnimals")}
            title="animal content"
            dot={require("../graphics/redDot.png")}
          />
          <NavDotRight
            navigation={() => navigation.navigate("FlappyBird")}
            title="flappy rat"
            dot={require("../graphics/limeDot.png")}
          />
          <NavDotLeft
            navigation={() => navigation.navigate("MemoryGame")}
            title="match the 'moji's"
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

          {/* <NavDotLeft
            navigation={() => navigation.navigate("Practice")}
            title="practice"
            dot={require("../graphics/tealDot.png")}
          /> */}
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
    fontSize: 18,
    width: 300,
    fontFamily: "Fredoka-Regular",
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
