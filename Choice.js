import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Choice({navigation}) {
    const loadScreen = ()=> {
        navigation.navigate ('Calculate');
    }
    return (
      <View  >
          <View style = {styles.iconandText}>
          <MaterialIcons 
          name="liquor" size={24} color="blue" 
          onPress = {loadScreen}/>
          <Text> БЕСПЛАТНО </Text>
          </View>

          <View style = {styles.iconandText}>
          <MaterialCommunityIcons 
          name="solid" size={24} color="red" 
          onPress = {loadScreen}/>
          <Text> 99р/мес</Text>
          </View>

          <View style = {styles.iconandText}>
          <MaterialCommunityIcons 
          name="gas-cylinder" size={24} color="red" 
          onPress = {loadScreen}/>
          <Text> 99руб/мес </Text>
          </View> 
      </View>
    )
};
const styles = StyleSheet.create (
    {
        iconandText:
        {
            flexDirection:'row',
        },
        icons:
        {
            
        }
    }
)

