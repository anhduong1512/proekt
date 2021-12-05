import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import {gStyle} from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';
export default function Main({navigation}) {
  {
    const loadScreen =()=>
    {
      navigation.navigate('Contact');
    }
    const [news,setNews] = useState (
      [
        {name: 'Goo', anons: 'Google', full: 'Google is cool!', key:'1',img: 'https://freesvg.org/img/1534129544.png'},
        {name: 'App', anons: 'Apple', full: 'Apple is cool!',key:'2',img:'https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj'},
        {name: 'Face', anons: 'Facebook', full: 'Facebook is cool!',key:'3',img:'https://www.facebook.com/images/fb_icon_325x325.png'},
      ]
    );
    const [modalWindow,setModalWindow] = useState(false);
    
    const addArticle = (article) =>  {
      setNews ((list) => {
        article.key = Math.random ().toString() ;
 
        return [
          article, 
          ...list
        ]
      });
      setModalWindow (false);
    }

    return (
      <View style = {gStyle.main}>
         <Modal visible = {modalWindow}>
          <Ionicons onPress = {()=>setModalWindow(false)}name="close-circle" size={34} color="black" style ={styles.iconClose}/>
            <Text style = {styles.title}> Форма добавления статей </Text>
            <Form addArticle = {addArticle}/>
        </Modal> 
            <Ionicons onPress = {()=> setModalWindow(true)} name="add-circle-sharp" size={24} color="black" style ={styles.iconAdd}/>
            <Text style = {[gStyle.title,styles.header]}>Главная страница </Text>
            <FlatList data={news} renderItem = {({item}) => (
              <TouchableOpacity style = {styles.item} onPress ={()=>navigation.navigate('Contact',item)}>
                <Image style = {styles.image} source = 
                {{
                  uri: item.img,
                }}/>
                <Text style = {styles.title}>{item.name}</Text>
                <Text style = {styles.anons}>{item.anons}</Text>
              </TouchableOpacity>
            )}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconAdd:
  {
    textAlign: 'center',
    marginBottom: 15
  },
  iconClose:
  {
    textAlign: 'right',
  },
  main:
  {
  },
  header:
    {
      marginBottom:30,
    },
  item:
    {
      width:'100%',
      marginBottom:30,
      
    },
    title:
    {
      fontFamily:'zen',
      fontSize: 22,
      textAlign:'center',
      marginTop: 20,
      color:'#474747',
    },
    anons:
    {
      fontFamily:'zen',
      fontSize: 18,
      textAlign:'center',
      marginTop: 5,
      color:'#474747',
    },
    image:
    {
      width:'100%',
      height:200,
    }
});