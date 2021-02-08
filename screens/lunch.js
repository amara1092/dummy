import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Picker from '../src/picker';
//import CheckBox from '../src/checkBox';

export default function Lunch ({ navigation }) {

 const acceptHandler = () => 
 {
   navigation.navigate('Hour')
 }
 const cancelHandler = () => 
 {
   navigation.navigate('Home')
 }


   return (
    <View style={styles.container}>
      <Picker/>


    <View style={styles.accept}>
      <Button title="Accept" color="#0E6DE8" onPress={acceptHandler}/>
    </View>

    <View style={styles.cancel}>
      <Button title="Cancel" color="#FF0000" onPress={cancelHandler}/>
    </View>

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
  