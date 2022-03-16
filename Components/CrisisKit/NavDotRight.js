import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NavDotRight({ title, dot, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation}>
        <Image source={dot} style={styles.rightDot} />
        <View style={styles.dotBody}>
          <Text style={styles.dotTextRight}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 25,
  },
  dotBody: {
    position: "absolute",
  },
  rightDot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
  },
  dotTextRight: {
    textAlign: "right",
    marginTop: 25,
    marginLeft: -50,
    fontSize: 20,
    // fontWeight: "bold",
    color: "#303746",
  },
});
