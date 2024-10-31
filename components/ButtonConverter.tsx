import { View, Text, TouchableOpacity, TextInputProps } from 'react-native'
import React from 'react'
import { style } from '@/constants/App.style'

interface UiniProp extends TextInputProps{
  unit?:string,
  
}
export default function ButtonConverter({unit,onPress}:UiniProp) {
  return (
        <TouchableOpacity onPress={onPress} style={style.buttonStyle}>
            <Text style={style.buttonTextStyle}>Convertir en {unit}</Text>
        </TouchableOpacity>
  )
}