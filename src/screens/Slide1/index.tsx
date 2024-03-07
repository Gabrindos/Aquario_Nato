import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle."
import React from "react"

export function Slide1() {
    const slide = require('../../assets/UltraPeixolas.png')
        return(
        <ImageBackground source={slide} 
        style={styleContainer.container}>
        <Text>
          Entrar 
        </Text>
        </ImageBackground>
        

        
    )
}