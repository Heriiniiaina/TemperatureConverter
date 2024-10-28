import {StyleSheet} from "react-native"

export const style = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:"center",
        padding:20
    },
    workspace:{
        height:450,
       
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    input:{
        backgroundColor:"white",
        padding:2,
        borderRadius:15,
        height:50,
        alignSelf:"stretch"
    }
})