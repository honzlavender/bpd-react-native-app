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
        backgroundColor: 'white',
        paddingTop: 54,
        paddingLeft: 24,
    },
  //redirect to Home page
  backButton: {
    fontSize: 20,
    backgroundColor: 'pink',
  },
})