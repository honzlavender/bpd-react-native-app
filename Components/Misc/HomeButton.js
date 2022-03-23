import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';

export default function BackHomeNav({ navigation }){
    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={navigation}>
          <FontAwesome5 name="home" style={styles.icon} />
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "flex-start",
    },
    icon: {
      fontSize: 30,
      marginTop: 65,
      marginLeft: 22,
      color: 'lightblue'
    },
})