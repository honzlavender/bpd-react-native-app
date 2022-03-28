import { StyleSheet, Text, View, Image } from "react-native";
import HomeButtons from "./HomeButtons";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>an honest app for</Text> */}
      <Text style={styles.homeTitle}>a crisis kit</Text>
      <Text style={styles.subTitle}>
        panic & anxiety attacks, episodes, & impulse control
      </Text>
      {/* <HomeButtons
        title="non-toxic support"
        customStyles={{ backgroundColor: "#537492", color: "#223c53" }}
        navigation={() => navigation.navigate("SupportHome")}
      /> */}
      <Image
        style={styles.pic}
        source={require("../graphics/background.png")}
      />
      <HomeButtons
        // smallTitle={`(chuckles)`}
        title={`distract me`}
        customStyles={{ backgroundColor: "#fbdb39", color: "#807303" }}
        navigation={() => navigation.navigate("CrisisKitHome")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontFamily: "Fredoka-Regular",
    zIndex: 1,
    fontSize: 13,
  },
  homeTitle: {
    marginTop: 20,
    fontFamily: "Fredoka-Bold",
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 0,
    marginBottom: -8,
    fontSize: 70,
    color: "#303746",
  },
  pic: {
    resizeMode: "contain",
    width: 600,
    position: "absolute",
  },
});
