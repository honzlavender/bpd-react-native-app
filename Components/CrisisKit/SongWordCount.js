import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GoBackNav from "../Misc/GoBackNav";
import * as Linking from "expo-linking";

export default function SongWordCount({ navigation }) {
  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            "https://open.spotify.com/playlist/0oBSdxgF4ddJp6rMqnpeUS?si=At7KPFHQTU2Aw0SAF0jepg"
          );
        }}
      >
        <Text style={styles.playListLink}>{"playlist"}</Text>
      </TouchableOpacity>
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