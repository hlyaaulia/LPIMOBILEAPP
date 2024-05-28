import { View,Text,StyleSheet} from "react-native";
import{useEffect} from 'react';

export default function SplashScreen({navigation}){
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigation.replace('Login')
    //     },5000);
    // },[navigation])
    return(
        <linearGradient colors={['#4c669f','#3b599','#192f6a']} style={style.linearGradient}>
            <View style={style.textContainer}>
                <Text style={style.textSplash}>Facebook</Text>
            </View>
        </linearGradient>
        
    );
}

const style = StyleSheet.create({
    linearGradient:{
        flex:1,
    },
    textContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textSplash:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})