import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function GoBackNav({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="leftcircle" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //redirect to Home page
  icon: {
    fontSize: 30,
    marginTop: 65,
    marginLeft: 22,
    color: 'lightblue'
  },
});
