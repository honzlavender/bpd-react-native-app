import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GoBackNav from "../Misc/GoBackNav";

export default function IRLKit({ navigation }) {

  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
      <Text> </Text>
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
    fontSize: 32,
    fontWeight: 'bold',
  },
});