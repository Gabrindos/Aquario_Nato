import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalstyle'

export const styles = StyleSheet.create({
    text:{
   
        color: colors.white,
        fontSize: 25,
        textAlign: 'center',
      
    },

    text2:{
        color: colors.white,
        fontSize: 25,
        textAlign: 'center',
      
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
        width:400,
        marginBottom: 40

    },

    view2:{
        flex:1,

    },

    img:{
        marginRight:40
    },

    img2: {
        marginLeft:20,
        marginBottom:20
        

    },

    centralizar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop:600
    },

    centralizar2: {
        gap:30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',

    },
    centralizar3: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',

    },

   


})