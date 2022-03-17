import { StyleSheet, Text, View, Image } from "react-native";
import HomeButtons from "./HomeButtons";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>an honest app for</Text> */}
      <Text style={styles.homeTitle}>a crisis kit</Text>
      <Text style={styles.subTitle}>
        for those of us with BPD & other spicy disorders
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
        smallTitle={`(chuckles)`}
        title={`i'm in danger`}
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
    zIndex: 1,
  },
  homeTitle: {
    zIndex: 1,
    paddingHorizontal: 24,
    paddingVertical: 0,
    marginBottom: -8,
    fontSize: 72,
    color: "#303746",
  },
  pic: {
    resizeMode: "contain",
    width: 450,
    position: "absolute",
  },
});
