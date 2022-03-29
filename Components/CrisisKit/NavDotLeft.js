import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function NavDotLeft({ dot, title, navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={navigation}>
        <Image source={dot} style={styles.leftDot} />
        <View style={styles.dotBody}>
          <Text style={styles.dotTextLeft}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dotBody: {
    marginLeft: 75,
    marginTop: 16,
    position: "absolute",
    borderRadius: 100,
    // backgroundColor: "#fff",
  },
  leftDot: {
    resizeMode: "contain",
    width: 75,
    height: 75,
    marginLeft: 25,
  },
  dotTextLeft: {
    fontFamily: 'Fredoka-Bold',
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "#303746",
  },
});
