import {StyleSheet} from "react-native";
import { COLORS } from './../../res/constantes';

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        height: "30%",
        shadowColor:COLORS.shadowColorBleu,
        shadowOpacity:0.7,
        shadowOffset:{height: 10}
    },
    title:{
        color: COLORS.white,
        fontSize:32,
        fontStyle:"italic",
        fontWeight: 'bold',
    }
});

export default styles;