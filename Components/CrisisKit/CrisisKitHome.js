import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import NavDotLeft from "./NavDotLeft";
import NavDotRight from "./NavDotRight";

export default function CrisisKitHome() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <NavDotLeft title="word count game" dot={require("../graphics/blueDot.png")}/>
          <NavDotRight title="drawing pad" dot={require("../graphics/purpleDot.png")}/>
          <NavDotLeft title="baby animals" dot={require("../graphics/redDot.png")}/>
          <NavDotRight title="flappy bird" dot={require("../graphics/limeDot.png")}/>
          <NavDotLeft title="memory game" dot={require("../graphics/yellowDot.png")}/>
          <NavDotRight title="diy kit irl" dot={require("../graphics/pinkDot.png")}/>
          <NavDotLeft title="hotlines" dot={require("../graphics/tealDot.png")}/>
        </View>
      </ScrollView>
    </View>
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
    margin: 20,
  },
  textView: {
    position: "absolute",
  },
  title: {
    marginTop: 95,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    resizeMode: "contain",
    margin: -15,
    width: 250,
    height: 250,
  },
  //body holds dots
  body: {
    backgroundColor: "white",
    marginTop: 5,
  },
  dotBody: {
    position: "absolute",
  },
  leftDot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
    marginLeft: 25,
  },
  rightDot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
    marginLeft: 275,
  },
  dotTextLeft: {
    // position: "absolute",
    marginLeft: 60,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

//      {/* drawing pad */}
//      <Image
//      source={require("../graphics/purpleDot.png")}
//      style={styles.rightDot}
//    />
//    {/* baby animals */}
//    <Image
//      source={require("../graphics/redDot.png")}
//      style={styles.leftDot}
//    />
//    {/* flappy bird */}
//    <Image
//      source={require("../graphics/limeDot.png")}
//      style={styles.rightDot}
//    />
//    {/* memory game */}
//    <Image
//      source={require("../graphics/yellowDot.png")}
//      style={styles.leftDot}
//    />
//    {/* diy crisis kit */}
//    <Image
//      source={require("../graphics/pinkDot.png")}
//      style={styles.rightDot}
//    />
//    <Image
//      source={require("../graphics/tealDot.png")}
//      style={styles.leftDot}
//    />
