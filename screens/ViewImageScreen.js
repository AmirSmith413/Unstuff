import React from "react";
import { StyleSheet,Image } from "react-native";

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
       }
})

export default ViewImageScreen