import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CDPicker from '../src/CDpicker';
import Tester from '../src/tester';

export default function Test ({ navigation }) {

 const acceptHandler = () => 
 {
   navigation.navigate('Home')
 }
 const cancelHandler = () => 
 {
   navigation.navigate('Home')
 }
 


   return (
    <View style={styles.container}>
    <Tester/>
   
  </View>
);
}


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
     borderWidth: 1,
     borderColor: '#777',
     padding:8,
     height: 150, 
     width: 350
  },

      accept: {
        marginLeft:180,
        marginTop:-24,
        height: 20, 
        width: 130
    },

      cancel: {
        marginLeft:-180,
        marginTop:-22,
        height: 50, 
        width: 130
    },
      
  });
  