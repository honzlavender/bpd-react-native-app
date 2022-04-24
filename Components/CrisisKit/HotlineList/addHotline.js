import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AddHotline({ submitHandler }){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }


    
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="someone you trust..."
            onChangeText={changeHandler}
            />
            <TouchableOpacity onPress={() => submitHandler(text)}>
                <Text style={styles.addNumber}> add number</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    addNumber: {
        textAlign: 'center',
        fontFamily: 'Fredoka-Bold',
        color: '#303746',
    }
})