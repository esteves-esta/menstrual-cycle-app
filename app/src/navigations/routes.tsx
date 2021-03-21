import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import Color from 'color';

import Calendar from 'pages/Calendar';
import Home from 'pages/Home';
import AddCycles from 'pages/AddCycles';
import Analysis from 'pages/Analysis';
import Config from 'pages/Config';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MyTabs() {
  const { colors } = useTheme();
  const activeTintColor = Color(colors.primary).lighten(0.8).hex();
  const inactiveTintColor = Color(colors.primary).lighten(0.35).hex();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Calendar':
              iconName = 'calendar';
              break;
            case 'Config':
              iconName = 'settings';
              break;
            case 'Analysis':
              iconName = 'activity';
              break;
            default:
              iconName = 'home';
              break;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: activeTintColor,
        inactiveTintColor: inactiveTintColor,
        labelStyle: { fontSize: 12, marginBottom: 10 },
        keyboardHidesTabBar: true,
        style: {
          height: 75,
          elevation: 0,
          shadowRadius: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          position: 'absolute',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Analysis" component={Analysis} />
      <Tab.Screen name="Config" component={Config} />
    </Tab.Navigator>
  );
}

export function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="AddCycles" component={AddCycles} />
    </Stack.Navigator>
  );
}
