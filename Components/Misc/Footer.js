import { View, Text, StyleSheet } from "react-native"


export default function Footer(){
    return (
        <View style={styles.container}>
            <Text style={styles.footerHeader} >Footer</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 24,
    },
    footerHeader: {
        textAlign: 'center',
        fontSize: 32,
    }
})