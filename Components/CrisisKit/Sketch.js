import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import GoBackNav from "../Misc/GoBackNav";

export default function Sketch({ navigation }) {
  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
      <Text style={styles.sketchText}>{"sketch pad"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sketchText: {
    textAlign: "center",
    margin: 36,
    fontSize: 32,
    fontWeight: "bold",
  },
});
