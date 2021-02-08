import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Calenders from '../src/Calenders';

export default function Home ({ navigation }) {

 const pressHandler = () => 
 {
   navigation.navigate('Lunch')
 }


   return (
    <View style={styles.container}>
<Calenders/>
        <View style={styles.text}>
        <Text>Add an entry</Text>
        </View>

        <View style={styles.icons}>
            <MaterialIcons name='add-circle-outline' size={55} onPress={pressHandler}/>
        </View>

        <View style={styles.text1}>
        <Text>You have no entries for this week</Text>
        </View>


  </View>
);
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
        justifyContent: 'center'
        },
        
      text:{
        alignItems: 'center',
        marginTop:20,
        justifyContent: 'center'
        },

    icons:{
        alignItems: 'center',
        color:'white',
        marginBottom:200,
        justifyContent: 'center'
        },

        text1:{
          alignItems: 'center',
          marginTop: -50,
          marginBottom: 75,
          justifyContent: 'center'
          },
  });
  