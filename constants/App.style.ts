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
    inputContainer:{
        alignSelf:"stretch",
        justifyContent:"center"
        
    },
    input:{
        backgroundColor:"white",
        paddingLeft:25,
        borderRadius:15,
        height:50,
        alignSelf:"stretch"
    },
    unit:{
        fontSize:30,
        position:"absolute",
        alignSelf:"flex-end",
        paddingRight:25
        
    },
    display:{
        fontSize:50,
        color:"white"
    },
    buttonStyle:{
        backgroundColor:"black",
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:5,
        width:250,
        color:"white"
    },
    buttonTextStyle:{
        color:"white",
        alignSelf:"center",
        fontWeight:"bold"
    }

})