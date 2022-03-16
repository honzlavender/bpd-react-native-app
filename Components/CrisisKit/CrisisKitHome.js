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
            title="drawing pad"
            dot={require("../graphics/purpleDot.png")}
          />
          <NavDotLeft
            title="baby animals"
            dot={require("../graphics/redDot.png")}
          />
          <NavDotRight
            title="flappy bird"
            dot={require("../graphics/limeDot.png")}
          />
          <NavDotLeft
            title="memory game"
            dot={require("../graphics/yellowDot.png")}
          />
          <NavDotRight
            title="diy kit irl"
            dot={require("../graphics/pinkDot.png")}
          />
          <NavDotLeft
            title="hotlines"
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
    margin: 1,
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
    backgroundColor: "white",
    marginTop: 5,
  },
});
