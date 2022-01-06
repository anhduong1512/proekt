import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';


const fonts = () => Font.loadAsync({ 
    'zen': require('./assets/ZenKurenaido-Regular.ttf')
  }); 
export default function App() {
  const [font,setFont]  = useState (false);
  if (font)
  {
    return (
      <MainStack/>
    )
  }
  else 
  {
    return (
      <AppLoading 
      startAsync = {font} 
      onFinish = {()=> setFont(true)}
      onError = {console.warn} />
    );
  }
;
}

