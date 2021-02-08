//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import {BackHandler} from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import {createBottomTabNavigator} from 'react-navigation-tabs';

import Login from './screens/login';
import Home from './screens/home';
import Lunch from './screens/lunch';
import Hour from './screens/hours';
import Colors from './constants/Colors';
import Header from './shared/head';
import React from 'react';

const screens = {
  Login: {
    screen: Login,
      navigationOptions:
      {
        title: null,
      }
},

  Home:
  {
      screen: Home,
      navigationOptions:({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Timesheet' />,
        headerLeft: () => null
            }
      }
  },
  
  Lunch:
  {
    screen: Lunch,
    navigationOptions:({ navigation }) => {
    return {
      headerTitle: () => <Header navigation={navigation} title='Lunch Entry' />,
      headerLeft:null
          }
    }
},

Hour:
  {
    screen: Hour,
    navigationOptions:({ navigation }) => {
    return {
      headerTitle: () => <Header navigation={navigation} title='Enter hours' />,
      headerLeft:null
          }
    }
},


}


  


const stackNavigator = createStackNavigator(screens);



const App = createAppContainer(stackNavigator)
export default App