import { View, Image, Text, StyleSheet } from "react-native";

export default function NavDotLeft({ dot, title }) {
  return (
    <View>
      <Image
        // source={require("../graphics/blueDot.png")}
        source={dot}
        style={styles.leftDot}
      />
      <View style={styles.dotBody}>
        <Text style={styles.dotTextLeft}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotBody: {
    position: "absolute",
  },
  leftDot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
    marginLeft: 25,
  },
  dotTextLeft: {
    marginLeft: 60,
    marginTop: 25,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
