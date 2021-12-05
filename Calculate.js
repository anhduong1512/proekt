import React, {useState} from "react";
import {Text,View,TextInput,StyleSheet,Button,Modal} from "react-native";
import SQLite from 'react-native-sqlite-storage';

export default function Calculate ()
{
   
    const [Q,setQ] = useState ();
    const [m,setm] = useState ();
    const [c,setc] = useState ();
    const [T2,setT2] = useState ();
    const [T1,setT1] = useState ();

    const [modalQ,setModalQ] = useState(false);
    const [modalm,setModalm] = useState(false);
    const [modalc,setModalc] = useState(false);
    const [modalT2,setModalT2] = useState(false);
    const [modalT1,setModalT1] = useState(false);
    
    const onChangeQ = (Q) => {
        setQ(Q);
    };
    const onChangem = (m) => {
        setm(m);
    };
    const onChangec = (c) => {
        setc(c);
    };
    const onChangeT2 = (T2) => {
        setT2(T2);
    };
    const onChangeT1 = (T1) => {
        setT1(T1);
    };

    return(
        /* 5 окошек */
    <View style = {{flex:0.5}}>
        <View style = {styles.showValues}>
            <Text>{Q}</Text>
            <Text>{m}</Text>
            <Text>{c}</Text>
            <Text>{T2}</Text>
            <Text>{T1}</Text>
        </View>
        
    <View style = {styles.poles}>
    <Text> Q = </Text>
    <TextInput placeholder = 'Вводить Q' onChangeText = {onChangeQ}/>
    <Button title = 'ЕИ' onPress = {()=>setModalQ(true)}/>
    <Modal visible = {modalQ}>
        <Text>Единица измереия Q</Text>
        <Button title = 'OK' onPress = {()=>setModalQ(false)}/>
    </Modal>
    </View>
    <View style = {styles.poles}>
    <Text> m = </Text>
    <TextInput placeholder = 'Вводить m'onChangeText = {onChangem}/>
    <Button title = 'ЕИ' onPress = {()=>setModalm(true)}/>
    <Modal visible = {modalm}>
        <Text>Единица измереия m</Text>
        <Button title = 'OK' onPress = {()=>setModalm(false)}/>
    </Modal>
    </View>
    <View style = {styles.poles}>
    <Text> c = </Text>
    <TextInput placeholder = 'Вводить c'onChangeText = {onChangec}/>
    <Button title = 'ЕИ' onPress = {()=>setModalc(true)}/>
    <Modal visible = {modalc}>
        <Text>Единица измереия c</Text>
        <Button title = 'OK' onPress = {()=>setModalc(false)}/>
    </Modal>
    </View>
    <View>
        <Text>T кипения = </Text>
        <Text>T замера =  </Text>
    </View>
    <View style = {styles.poles}>
    <Text> T2 = </Text>
    <TextInput placeholder = 'Вводить T2' onChangeText = {onChangeT2}/>
    <Button title = 'ЕИ' onPress = {()=>setModalT2(true)}/>
    <Modal visible = {modalT2}>
        <Text>Единица измереия T2</Text>
        <Button title = 'OK' onPress = {()=>setModalT2(false)}/>
    </Modal>

    </View>
    <View style = {styles.poles}>
    <Text> T1 = </Text>
    <TextInput placeholder = 'Вводить T1' onChangeText = {onChangeT1}/>
    <Button title = 'ЕИ' onPress = {()=>setModalT1(true)}/>
    <Modal visible = {modalT1}>
        <Text>Единица измереия T1</Text>
        <Button title = 'OK' onPress = {()=>setModalT1(false)}/>
    </Modal>
    </View>
</View>  
    )  
};
 const styles = StyleSheet.create(
     {
        poles:
        {
            flex:0.125,
            color:'black',
            flexDirection:'row',
        },
        showValues:
        {
            flexDirection:'row',
            justifyContent:'space-around',
        }
     }
 )

