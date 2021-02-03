//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './screens/login';
import Home from './screens/home';
import Colors from './constants/Colors';

const screens = {
  Login:
  {
    screen: Login,
      navigationOptions:
      {
        title: 'Login',
        headerStyles: { backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        headerTintColor: Platform.OS === 'android' ? 'white' :  Colors.primary

      },
  }
},

  Home:
  {
      screen: Home,
      navigationOptions:
      {
        title: 'Home'

      }
  }

}


const stackNavigator = createStackNavigator(screens);



const App = createAppContainer(stackNavigator)
export default App