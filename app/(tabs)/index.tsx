import { Image, StyleSheet, Platform, Text, ImageBackground } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"
import { style } from '@/constants/App.style';
import hotBackground from "@/assets/images/hot.png"
export default function HomeScreen() {
  return (
    <ImageBackground source={hotBackground} style={style.container}>
        <View style={style.workspace}>
          <View>
            <Text>Temperature</Text>
          </View>
          <View>
            <Text>Input</Text>
          </View>
          <View>
          <Text>Bouton</Text>
          </View>
        </View>
    </ImageBackground>

  );
}

