import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


export default function BackHomeNav({ navigation }){
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={navigation}>
          <Text style={styles.backButton}>{"< home"}</Text>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 54,
        paddingLeft: 24,
    },
  //redirect to Home page
  backButton: {
      flex: 1,
    fontSize: 20,
    backgroundColor: 'pink',
  },
})