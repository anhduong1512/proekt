import React from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput } from 'react-native';
import {gStyle} from '../styles/style';
import {Formik} from "formik";

export default function Form({addArticle}) 
{
  return(
     <View>
         <Formik initialValues = {{name:'',anons:'', full:'', img:'' }}  onSubmit = {(values) =>{
          addArticle (values);
          action.resetForm ();
        }}>
         {(props)=> (
           <View>
             <TextInput 
             style = {styles.input}
             value = {props.values.name} 
             placeholder = 'Введите название' 
             onChangeText = {props.handleChange('name')} />
             <TextInput 
             style = {styles.input}
             value = {props.values.anons} 
             placeholder = 'Введите анонс' 
             onChangeText = {props.handleChange('anons')} />
             <TextInput 
             style = {styles.input}
             value = {props.values.full} 
             placeholder = 'Введите польную информацию' 
             multiline 
             onChangeText = {props.handleChange('full')} />
             <TextInput 
             style = {styles.input}
             value = {props.values.img} 
             placeholder = 'укажите фото' 
             onChangeText = {props.handleChange('img')} />
             <Button title = 'Добавить' onPress = {props.handleSubmit} />
           </View> 
         )}
         </Formik>
     </View> 
  );
}

const styles = StyleSheet.create({
  input: 
  {
    borderWidth:1,
    marginTop: 15,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 5, 
  }

});