import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export default function HomeButtons({
  title,
  customStyles,
  navigation,
  smallTitle,
}) {
  // const navigate = useNavigation()
  return (
    <View>
      <TouchableOpacity
        style={[styles.appButtonContainer, customStyles]}
        // onPress={() => navigation.navigate()}
        onPress={navigation}
      >
          {/* customStyles let's be add individual styling to shared components */}
          <Text style={[styles.appButtonSmallText]}>{smallTitle}</Text>
          <Text style={[styles.appButtonText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 75,
    height: 80,
    width: 160,
    shadowColor: '#005b7d',
    shadowOffset: { height: 6, width: 6 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 0, //IOS
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#303746",
    textTransform: "uppercase",
  },
  appButtonSmallText: {
    textAlign: "center",
    fontSize: 12,
    color: "#303746",
    paddingBottom: 5,
  },
});
