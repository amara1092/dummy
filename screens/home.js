import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function Home ({ navigation }) {

 const pressHandler = () => 
 {
   navigation.navigate('Login')
 }


   return (
    <View style={styles.container}>
    <Text>Home</Text>
    <Button title="Login" color="#FF0000" onPress={pressHandler}/>
  </View>
);
}


const styles = StyleSheet.create({
    
  });
  