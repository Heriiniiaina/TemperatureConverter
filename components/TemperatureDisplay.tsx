import { View, Text, TextProps } from 'react-native'

import { style } from '@/constants/App.style'
interface TemperatureDisplayProps extends TextProps{
    value?:string,
    unit?:string
}
export default function TemperatureDisplay({value,unit}:TemperatureDisplayProps) {
  return (
    
      <Text style={style.display}>{value} {unit}</Text>
    
  )
}