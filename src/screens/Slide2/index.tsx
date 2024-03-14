import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";
import { styles } from './style'
import React from "react"

export function Slide2({ setPageI }: IPagina) {
    const slide = require('../../assets/UltraPeixolas.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View>

            </View>
                <View style={styles.buttonContainer}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={false} />
                    <ButtonSlide onPressI={() => setPageI(2)} cor={true} />
           </View>

           
        </ImageBackground>



    )
}