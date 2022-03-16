import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GoBackNav from "../Misc/GoBackNav";

export default function Sketch({ navigation }) {
  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
        <Text style={styles.playListLink}>{"sketch pad"}</Text>
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
    margin: 36,
    fontSize: 32,
    fontWeight: 'bold',
  },
});