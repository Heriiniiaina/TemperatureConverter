import { Text, TextInput } from "react-native";

import { style } from "@/constants/App.style";
export default function InputTemperature() {
  return (
    <TextInput style={style.input}  placeholder="Entrer un temperature ici"/>
  )
}
