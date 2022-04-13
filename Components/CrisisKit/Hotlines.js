import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import GoBackNav from "../Misc/GoBackNav";
import * as Linking from "expo-linking";

export default function Hotlines({ navigation }) {
  const onClick = () => {
    Linking.openURL("tel://231323312");
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image
          source={require("../graphics/purpleDot.png")}
          style={styles.dot}
        />
        <View style={styles.numberBox}>
          <Text style={styles.hotlineTitle}>Life-saving Hotlines</Text>

          <TouchableOpacity
            style={styles.hotlines}
            onPress={() => {
              Linking.openURL("tel://+1-719-266-2837");
            }}
          >
            <Text style={styles.hotlineText}>Call & Oats</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 50,
  },
  pageContainer: {
    backgroundColor: "#fff",
  },
  dot: {
    resizeMode: "contain",
    alignItems: "center",
    width: 75,
    height: 75,
    marginBottom: 48,
  },
  numberBox: {
    padding: 16,
    // marginHorizontal: 26,
    backgroundColor: "pink",
    borderRadius: 50,
    width: 325,
    height: 500,
  },
  hotlines: {},
  hotlineTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Fredoka-Bold",
    fontSize: 32,
    padding: 12,
  },
  hotlineText: {
    textAlign: "center",
    fontFamily: "Fredoka-Regular",
    fontSize: 24,
    padding: 12,
  },
});
