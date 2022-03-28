import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import GoBackNav from "../Misc/GoBackNav";
import * as Linking from "expo-linking";
import NavDotLeft from "./NavDotLeft";
import { ScrollView } from "react-native-gesture-handler";

export default function SongWordCount({ navigation }) {
  return (
    <ScrollView style={styles.pageContainer}>
      <GoBackNav navigation={navigation} />
      <View style={styles.container}>
        <Image source={require("../graphics/pinkDot.png")} style={styles.dot} />
        <View style={styles.instructions}>
          <Text style={styles.text}>
            When I'm *in it* the last thing I want to do is meditate or be alone
            in my mind.{"\n\n"}Instructions:{"\n"}Listen and count how many
            times you hear these words or phrases
          </Text>
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
          {/* <FlatList 
        data={[
          {key: '"Womanizer" x Britney Spears'},
          {key: '"Lovely Day" x Bill Withers'},
          {key: '"Roxanne" x The Police'},
          {key: '"Halo" x Beyonce'},
          {key: '"New Day Rising" x Hüsker Dü'},
          {key: '"My Hump" x Black Eyed Peas'},
          {key: '"Let It Be" x The Beatles'},
          {key: '"My Name is.." x Eminem'},
          {key: '"I get knocked down" (Tubthumping) x Chumbawamba'},
          {key: '"Donk" x Soulja Boy'},
        ]}
        renderItem={({item}) => <Text style={styles.textList}>{item.key}</Text>}
      /> */}
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              "https://open.spotify.com/playlist/7f5RNNTEglA6guC2s7kzkJ?si=b0e6af8b9f1d46c5"
            );
          }}
          style={styles.playlistButton}
        >
          <Text style={styles.playListLink}>{"open spotify playlist"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "white",
    marginBottom: 50,
  },
  pageContainer: {
    backgroundColor: "#005b7d",
    // marginBottom: 24,
  },
  playListLink: {
    fontFamily: "Fredoka-Bold",
    textAlign: "center",
    color: "#303746",
    fontSize: 17,
    padding: 4,
  },
  playlistButton: {
    marginTop: -40,
    borderRadius: 50,
    width: 150,
    backgroundColor: "lightblue",
    padding: 20,
  },
  instructions: {
    padding: 16,
    marginHorizontal: 26,
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 520,
  },
  text: {
    fontFamily: "Fredoka-Bold",
    marginVertical: 12,
    marginHorizontal: 28,
    color: "#303746",
    fontSize: 18,
  },
  textList: {
    fontFamily: "Fredoka-Bold",
    marginVertical: 14,
    marginHorizontal: 32,
    fontSize: 15,
    textTransform: "lowercase",
    color: "#f8757f",
    // textAlign: "center",
  },
  dot: {
    resizeMode: "contain",
    alignItems: "center",
    width: 75,
    height: 75,
    marginBottom: 24,
  },
});
