import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GoBackNav from "../Misc/GoBackNav";

export default function IRLKit({ navigation }) {
  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
        <Text style={styles.playListLink}>{"DIY IRL Crisi Kit"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  playListLink: {
    textAlign: "center",
    // margin: 36,
    fontSize: 32,
    fontWeight: 'bold',
  },
});