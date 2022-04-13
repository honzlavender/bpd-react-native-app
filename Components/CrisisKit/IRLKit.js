import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import GoBackNav from "../Misc/GoBackNav";

export default function IRLKit({ navigation }) {

  return (
    <View style={styles.container}>
      <GoBackNav navigation={navigation} />
    <View style={styles.page}>

      <Text style={styles.textList}>
            • "Womanizer" x Britney Spears{"\n"}
            • "Lovely Day" x Bill Withers{"\n"}
            • "Roxanne" x The Police{"\n"}
            • "Halo" x Beyonce'{"\n"}
            • "New Day Rising" x Hüsker Dü{"\n"}
            • "My Hump" x Black Eyed Peas{"\n"}
            • "Let It Be" x The Beatles{"\n"}
            • "My Name is.." x Eminem{"\n"}
            • "I get knocked down"{'\n'}(Tubthumping) x Chumbawamba{"\n"}
            • "Donk" x Soulja Boy{"\n"}
          </Text>
    </View>
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