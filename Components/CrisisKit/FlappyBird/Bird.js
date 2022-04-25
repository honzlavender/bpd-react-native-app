import React from 'react';
import { View, Image } from 'react-native';

export default function Bird({birdBottom, birdLeft}){
    const birdWidth = 130
    const birdHeight = 50

    return (
        <Image 
        source={require("../../../assets/graphics/flappyRat.png")}

        style={{
            borderRadius: 50,
            position: 'absolute',
            backgroundColor: '#191c24',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
        }}/>
    )
}

{/* <View style={{
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: 'blue',
    width: birdWidth,
    height: birdHeight,
    left: birdLeft - (birdWidth/2),
    bottom: birdBottom - (birdHeight/2),
}}></View> */}