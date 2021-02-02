import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {
 
   return (
    <View style={styles.container}>
    
    <View style={styles.image}>
      <Image source={require('../assets/obelisks.png')}/>
    </View>

    <View style={styles.login}>
        <TextInput
          placeholder='Login'
        />
    </View>

    <View style={styles.password}>
        <TextInput
          placeholder='Password'
        />
    </View>
   
    <Button title="Login" color="#FF0000" onPress={() => navigation.navigate('Home')}></Button>

    <View style={styles.words}>
        <Text>Forgot password</Text>
        <StatusBar style="auto" />
    </View>

  </View>
);
}


export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     
    image: {
          marginTop:-150,
          alignItems: 'center'
      },
      
    login: {
        borderWidth: 1,
        width: 250,
        height: 40,
        marginTop:80,
        margin: 10
        
      },
  
      password: {
        borderWidth: 1,
        width: 250,
        height: 40,
        margin: 10
      },
      

      words: {
        margin: 50
      }
  
  });
  