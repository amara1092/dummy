import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CDPicker from '../src/CDpicker';
import Forms from '../src/forms';

export default function Hour ({ navigation }) {

 const acceptHandler = () => 
 {
   navigation.navigate('Homend')
 }
 const cancelHandler = () => 
 {
   navigation.navigate('Lunch')
 }
 


   return (
    <View style={styles.container}>
      <Forms/>
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

  
  });
  