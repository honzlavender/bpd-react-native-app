import { Button, TouchableOpacity, View, StyleSheet, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomeButtons({ title, customStyles, navigation }) {
  // const navigate = useNavigation()
  return (
    <View>
      <TouchableOpacity 
      style={[styles.appButtonContainer, customStyles]}
      // onPress={() => navigation.navigate()}
      onPress={navigation}
      >
        <Text style={[styles.appButtonText, customStyles]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    marginTop: 18,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
