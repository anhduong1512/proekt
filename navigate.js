import React from 'react';
import Choice from './Choice';
import Calculate from './Calculate';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();
export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen 
            name = "Choice"
            component = {Choice}
            options = {{title :'Выбирать тип веществ'}}
        />
        <Stack.Screen
        name = "Calculate"
        component = {Calculate}
        options = {{title:'G = m*c*(T2-T1)'}}
        />
        </Stack.Navigator>
    </NavigationContainer>;
}