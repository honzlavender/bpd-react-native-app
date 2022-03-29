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
    fontFamily: 'Fredoka-Bold',
    textAlign: "right",
    marginTop: 20,
    marginLeft: -75,
    fontSize: 18,
    color: "#303746",
  },
});
