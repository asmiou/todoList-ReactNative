import {StyleSheet} from "react-native";
import { COLORS } from './../../res/constantes';

const styles = StyleSheet.create({
    container:{
        alignSelf:"flex-end",
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        
        position: 'absolute',
        bottom:0,
        right:15,
        marginBottom:70,
    },

    btn:{
        padding: 10,
        borderRadius: 100,
        backgroundColor: COLORS.btnBlue,
    },

    icon:{
        color:COLORS.white,
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    }
});

export default styles;