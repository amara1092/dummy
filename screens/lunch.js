import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Picker from '../src/picker';
import CheckBox from '../src/checkBox';

export default function Lunch ({ navigation }) {
   return (
    <View style={styles.container}>
      <Picker/>
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
  