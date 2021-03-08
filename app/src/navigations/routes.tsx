import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import First from '../pages/index';
import First from 'pages/Teste';
import Home from 'pages/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test" component={First} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={First} />
    </Stack.Navigator>
  );
}
