import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from "react-native"


export default function GoBackNav({ navigation }){


    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Text style={styles.backButton}>{"< back"}</Text>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
    },
  //redirect to Home page
  backButton: {
    fontSize: 20,
    backgroundColor: 'pink',
  },
})