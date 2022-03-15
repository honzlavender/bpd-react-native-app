import { StyleSheet, Text, View } from "react-native";
import HomeButtons from "./HomeButtons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>an honest app for</Text>
      <Text style={styles.homeTitle}>BPD</Text>
      <Text>because life sucks sometimes</Text>
      <HomeButtons
        title="non-toxic support"
        customStyles={{ backgroundColor: "#537492", color: "#223c53" }}
      />
      <HomeButtons
        title="crisis kit"
        customStyles={{ backgroundColor: "#fed607", color: "#807303" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fab4b0',
    backgroundColor: "#fdd9c3",
    alignItems: "center",
    justifyContent: "center",
  },
  homeTitle: {
    backgroundColor: "#fab4b0",
    paddingHorizontal: 24,
    paddingVertical: 0,
    fontSize: 118,
  },
});



