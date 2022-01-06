import React, {useState} from "react";
import {Text,View,TextInput,StyleSheet,Button,Modal, Alert} from "react-native";
import SQLite from 'react-native-sqlite-storage';
/* const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    ()=>{},
    error =>{console.log(error)}
);

const creatTable =() => {
    db.transaction ((tx)=>{
        tx.executeSql (
            "CREATE TABLE IF NOT EXISTS "
            + "Liquids "
            + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, c REAL, t_max REAL, t_min REAL); "
        )
    })
}
const setData = () => {
    if (c==0)
    {
        Alert.alert ('Внимание!', 'Вводите с.')
    } else{
        try{
            db.transaction ((tx)=>{
                tx.executeSql(
                    "INSERT INTO Liquids (Name, c, t_max, t_min) VALUES (?,?,?,?) "
                );
            })
        } catch  (error) {
            console.log(error);
        }
    }
}

const getData = () => {
    try {
        db.transaction ((tx)=>{
            tx.executeSql(
                "SELECT Name, c, t_max, t_min WHERE c = 0",
                [],
                (tx,results) => {
                    var len = results.rows.length;
                    if (len>0)
                    {
                        var liquidName = results.rows.item(0).Name;
                        var liquidc = results.rows.item(0).c;
                        var liquidt_max = results.rows.item(0).t_max;
                        var liquidt_min = results.rows.item(0).t_min;
                        set
                    }
                }
            )
        })
    }catch (error) {
        console.log (error);
    }
} */

/* var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'liquids1.db',createFromLocation :'~test.db', this.openCB, this.errorCB}) */
/* db.transaction (
    (tx) => {tx.executeSql ('SELECT Name, c, t_max, t_min FROM Liquids')}
) */
   
/* errorCB(err) {
        ToastAndroid.show("SQL Error: " + err, ToastAndroid.SHORT);
      };
    
        successCB() {
        ToastAndroid.show("SQL executed fine",  ToastAndroid.SHORT);
      };
      
        openCB() {
        console.log("Database OPENED");
      }; */
export default function Calculate ()
{
    
    const [Q,setQ] = useState ();
    const [m,setm] = useState ();
    const [c,setc] = useState ();
    const [T2,setT2] = useState ();
    const [T1,setT1] = useState ();

    /* Для единиц измерения */
    const [eQ,seteQ] = useState ();
    const [em,setem] = useState ();
    const [ec,setec] = useState ();
    const [eT2,seteT2] = useState ();
    const [eT1,seteT1] = useState ();

    const [modaleQ,setModaleQ] = useState(false);
    const [modalem,setModalem] = useState(false);
    const [modalec,setModalec] = useState(false);
    const [modaleT2,setModaleT2] = useState(false);
    const [modaleT1,setModaleT1] = useState(false);
    const [modalc,setModalc] = useState(false);
    /*if ( (m!=NaN) && (T1!=NaN) && (T2!=NaN) && (c!=NaN))
    {
        Q = m*c*(T2-T1);
        setQ(Q);
    }  */
                  
    const onChangeQ = (Q) => 
    {
        setQ(Q);
    };
    const onChangem = (m) => {
        setm(m);
    };
    const onChangec = (c) => {
        setc(c);
    };
    const onChangeT2 = (T2) => {
        if (eT2 == 'K')
        {
            setT2(T2);
        }
        else if (eT2 == 'C')
        {
            setT2 (T2 + 273);
        }
        else if (eT2 =='F')
        {
            setT2 ((T2-32)/1.8 + 273 ) ;
        }
        /* else
        {
            //alert ('Выберите единицу измерения для Т2');
        } */
        
        
    };
    const onChangeT1 = (T1) => {
        setT1(T1);
    };

    return(
        /* 5 окошек вверху*/
    <View style = {{flex:0.5}}>
        <View style = {styles.showValues}>
            <Text>{Q}</Text>
            <Text>{m}</Text>
            <Text>{c}</Text>
            <Text>{T2}</Text>
            <Text>{T1}</Text>
        </View>

    {/* Поле ввода */}
    <View style = {styles.poles}>
    <Text> Q = </Text>
    <TextInput placeholder = 'Вводить Q' onChangeText = {onChangeQ}/>
    <Button title = 'ЕИ' onPress = {()=>setModaleQ(true)}/>
    <Modal visible = {modaleQ}>
        <Text>Единица измереия Q</Text>
        <Button title = 'OK' onPress = {()=>setModaleQ(false)}/>
    </Modal>
    </View>
    <View style = {styles.poles}>
    <Text> m = </Text>
    <TextInput placeholder = 'Вводить m' onChangeText = {onChangem}/>
    <Button title = 'ЕИ' onPress = {()=>setModalem(true)}/>
    <Modal visible = {modalem}>
        <Text>Единица измереия m</Text>
        <Button title = 'OK' onPress = {()=>setModalem(false)}/>
    </Modal>
    </View>
    <View style = {styles.poles}>
    <Text> c = </Text>
    {/* <TextInput placeholder = 'Вводить c'onChangeText = {onChangec}/> */}
    <Button title = 'Выберите с' onPress = {()=>setModalc(true)} />
    <Modal visible = {modalc}>
        {/* Тут выбрать значение с из базой данных */}
        <Text> Выберите значение с </Text>
        <Button title = 'OK' onPress = {()=>setModalc (false)}/>
    </Modal>
    
    {/*<Button title = 'ЕИ' onPress = {()=>setModalec(true)}/>
     <Modal visible = {modalec}>
        <Text>Единица измереия c</Text>
        <Button title = 'OK' onPress = {()=>setModalec(false)}/>
    </Modal> */}
    </View>
    {/* Здесь Т кипения и Т замера из базы данных */}
    <View>
        <Text>T кипения = </Text>
        <Text>T замера =  </Text>
    </View>
    <View style = {styles.poles}>
    <Text> T2 = </Text>
    <TextInput placeholder = 'Вводить T2' onChangeText = {onChangeT2}/>
    <Text> {eT2}</Text>
    <Button title = 'ЕИ' onPress = {()=>setModaleT2(true)}/>
    <Modal visible = {modaleT2}>
        <Text>Единица измереия T2</Text>
        <Button title = 'K' onPress = {()=>{
            setModaleT2(false);
            seteT2 ('K');
            }}/>
        <Button title = 'C' onPress = {()=>{
            setModaleT2(false);
            seteT2 ('C'); 
            }}/>
        <Button title = 'F' onPress = {()=>{
                setModaleT2(false);
                seteT2 ('F');
            }}/>
    </Modal>

    </View>
    <View style = {styles.poles}>
    <Text> T1 = </Text>
    <TextInput placeholder = 'Вводить T1' onChangeText = {onChangeT1}/>
    <Button title = 'ЕИ' onPress = {()=>setModaleT1(true)}/>
    <Modal visible = {modaleT1}>
        <Text>Единица измереия T1</Text>
        <Button title = 'K' onPress = {()=>setModaleT1(false)}/>
        <Button title = 'C' onPress = {()=>setModaleT1(false)}/>
        <Button title = 'F' onPress = {()=>setModaleT1(false)}/>
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

