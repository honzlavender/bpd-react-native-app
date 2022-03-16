import { View, Image, Text, StyleSheet } from "react-native";

export default function NavDotRight({ title, dot }) {
  return (
    <View style={styles.container}>
      {/* drawing pad */}
      <Image
        source={dot}
        // source={require("../graphics/purpleDot.png")}
        style={styles.rightDot}
      />
      <View style={styles.dotBody}>
        <Text style={styles.dotTextRight}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25,
  },
  dotBody: {
    position: "absolute",
  },
  rightDot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
    // marginLeft: 275,
  },
  dotTextRight: {
    marginRight: 40,
    marginTop: 25,
    fontSize: 20,
    // fontWeight: "bold",
    color: "#303746",
  },
});
