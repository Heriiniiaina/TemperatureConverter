import { Text, TextInput, TextInputProps, View } from "react-native";

import { style } from "@/constants/App.style";
interface InputTemperatureProps extends TextInputProps{
    defaultValud?:String,
    unit?:string
}
export default function InputTemperature({defaultValue,onChangeText,unit}:InputTemperatureProps) {
    
  return (
    <View style={style.inputContainer}>
        <TextInput style={style.input} onChangeText={onChangeText}  placeholder="Entrer un temperature ici" keyboardType="numeric" maxLength={5} defaultValue={defaultValue}/>
        <Text style={style.unit}>{unit}</Text>
    </View>
  )
}
