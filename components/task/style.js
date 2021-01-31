import {StyleSheet} from "react-native";
import { COLORS } from './../../res/constantes';

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        padding:20,
        borderRadius: 10,
        justifyContent:"space-around"
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:"space-around"
    },
    btnDelete:{
        fontSize:18,
        color:'#F52A19'
    },
    btnChange:{
        fontSize:12
    },
    textContainer:{
        marginBottom:10,
    },
    text:{
        fontSize:18,
        color:COLORS.black
    },

    iconContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    iconDone:{
        color:'#28a745',
        padding:5
    },
    iconeProcessing:{
        color:"#343a40",
        padding:5
    },
    iconIncomming:{
        color:'#17a2b8',
        padding:5
    }
});

export default styles;