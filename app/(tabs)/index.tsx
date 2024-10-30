import { Image, StyleSheet, Platform, Text, ImageBackground } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"
import { style } from '@/constants/App.style';
import hotBackground from "@/assets/images/hot.png"
import InputTemperature from '@/components/InputTemperature';
import TemperatureDisplay from '@/components/TemperatureDisplay';
import { useState } from 'react';
import {DEFAULT_TEMPERATUR,DEFAULT_UNITS} from "@/constants/constant"
import {getOpposite,convertTemperature} from "@/services/temperatureService"
import ButtonConverter from '@/components/ButtonConverter';
export default function HomeScreen() {
  const [inputValue,setInputValue] = useState(DEFAULT_TEMPERATUR)
  const [unit,setUnit] = useState(DEFAULT_UNITS)

  return (
    <ImageBackground source={hotBackground} style={style.container}>
        <View style={style.workspace}>
          <View>
            <TemperatureDisplay value={convertTemperature(inputValue,getOpposite(unit))} unit={getOpposite(unit)}/>
          </View>
         
            <InputTemperature defaultValue={DEFAULT_TEMPERATUR} onChangeText={setInputValue}/>
       
          <View>
              <ButtonConverter/>
          </View>
        </View>
    </ImageBackground>

  );
}

