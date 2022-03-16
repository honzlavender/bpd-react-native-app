import * as Linking from "expo-linking";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppLink from "react-native-app-link";

export default function Practice() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(
            "https://open.spotify.com/playlist/0oBSdxgF4ddJp6rMqnpeUS?si=At7KPFHQTU2Aw0SAF0jepg"
          );
        }}
      >
        <Text style={styles.backButton}>{"play list"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  //redirect to Home page
  backButton: {
    fontSize: 20,
    textAlign: "center",
  },
});
