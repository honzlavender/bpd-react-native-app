import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Card(props) {
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={props.onPress} style={{...props.style}}> */}
      <TouchableOpacity onPress={props.onPress} style={styles.cardBox}>
        <Text style={{ fontSize: props.fontSize } || 32}>
          {props.isShow ? props.title : props.cover}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: 100,
    // height: 100,
    // backgroundColor: 'pink'
  },
  cardBox: {
    backgroundColor: "pink",
    borderRadius: 8,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    margin: (Dimensions.get("window").width - 48 * 4) / (5 * 2),
  },
});
