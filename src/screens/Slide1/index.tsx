import { ImageBackground, Text, View } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { ButtonSlide } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";
import { styles } from './style'
import React from "react"

export function Slide1({ setPageI }: IPagina) {
    const slide = require('../../assets/UltraPeixolas.png')
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.view2}>
                <View style={styles.view}>
                    <Text style={styles.text}>
                        Login      ||      Registrar
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true} />
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false} />
                </View>
            </View>

        </ImageBackground>


    )
}