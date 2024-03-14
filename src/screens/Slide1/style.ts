import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalstyle'

export const styles = StyleSheet.create({
    text:{
        color: colors.white,
        fontSize: 25,
        textAlign: 'center'
    },

    view: {
        marginTop: 650,

    },


    buttonContainer: {
        flex: 1,
        bottom:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width:400

    },




})