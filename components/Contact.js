import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {gStyle} from '../styles/style';

export default function Contact({route}) {
  {
   
    return (
      <View style = {gStyle.main}>
        <Image style = {styles.image}source = {{
                  uri: route.params.img,
                }}/>
            <Text style = {[gStyle.title, styles.header]}> {route.params.name} </Text>
            <Text style = {styles.full} > {route.params.full} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main:
  {
  },
  full:
  {
    fontFamily: 'zen',
    fontSize:16,
    textAlign: 'center',
    marginTop:20,
    color: '#474747',
  },
  header:
  {
    fontSize: 50,
    marginTop: 25,
  },
  image:
  {
    width:'100%',
    height: 200,
  }
});