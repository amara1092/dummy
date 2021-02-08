import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Forms from '../src/forms';
//import CheckBox from '../src/checkBox';

export default function Hour ({ navigation }) {

 const acceptHandler = () => 
 {
   navigation.navigate('Homend')
 }
 const cancelHandler = () => 
 {
   navigation.navigate('Home')
 }
 


   return (
    <View style={styles.container}>
      <Forms/>
      <Text>Description</Text>
      <TextInput style={styles.input}/>
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
  