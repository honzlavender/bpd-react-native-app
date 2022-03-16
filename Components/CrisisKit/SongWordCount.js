import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import GoBackNav from "../Misc/GoBackNav"


export default function SongWordCount({navigation}){


    return (
        <GoBackNav navigation={navigation}/>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 54,
        paddingLeft: 24,
    },
})