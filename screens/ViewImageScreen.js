import React from "react";
import { StyleSheet,Image,View } from "react-native";
import color from "../config/color";

function ViewImageScreen(props){
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={require('../assets/oldChair.jpg')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%'
       },
       container:{
        flex:1,
        backgroundColor:'#000'
       },
       loginButton:{
        backgroundColor:'blue',
        height:50,
        width:50,
        position:'absolute',
        top:5,
        right:20
       },
       deleteButton:{
        backgroundColor:'blue',
        height:50,
        width:50,
        position:'absolute',
        top:5,
        right:20
       }
})

export default ViewImageScreen