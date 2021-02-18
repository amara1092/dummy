import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Calenders from '../src/Calenders';
import { Divider,List,DataTable } from 'react-native-paper';
import Tables from '../src/Tables';

export default function Homend ({ navigation }) {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

 const pressHandler = () => 
 {
   navigation.navigate('Entry')
 }
 const acceptHandler = () => 
 {
   navigation.navigate('Hour')
 }
 const cancelHandler = () => 
 {
   navigation.navigate('Home')
 }


 return (
   <ScrollView>
     <View style={styles.container}>
       <Calenders />
       <View>
       <Tables />
       <List.Section style={styles.listcollapse}>
      <List.Accordion
        title="Monday"
        style={styles.accord}>
      <DataTable.Row>
       <DataTable.Cell numeric>ABO101597 MIROSLAV Jovanovic</DataTable.Cell>
       <DataTable.Cell numeric>8:00 - 12:00</DataTable.Cell>
       <DataTable.Cell numeric>4h</DataTable.Cell>
       <DataTable.Cell numeric>No</DataTable.Cell>
       <DataTable.Cell numeric> Description of job</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell numeric>LUNCH</DataTable.Cell>
       <DataTable.Cell numeric>12:00</DataTable.Cell>
       <DataTable.Cell numeric>1h</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
     </DataTable.Row>
      </List.Accordion>

      <Divider />
      
      <List.Accordion
        title="Tuesday"
        expanded={expanded}
        onPress={handlePress}
        style={styles.accord}>
        <DataTable.Row>
       <DataTable.Cell numeric>ABO101597 MIROSLAV Jovanovic</DataTable.Cell>
       <DataTable.Cell numeric>8:00 - 12:00</DataTable.Cell>
       <DataTable.Cell numeric>4h</DataTable.Cell>
       <DataTable.Cell numeric>No</DataTable.Cell>
       <DataTable.Cell numeric> Description of job</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell numeric>LUNCH</DataTable.Cell>
       <DataTable.Cell numeric>12:00</DataTable.Cell>
       <DataTable.Cell numeric>1h</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
     </DataTable.Row>
      </List.Accordion>
      
      <Divider />
      
      <List.Accordion
        title="Wednesday"
        expanded={expanded}
        onPress={handlePress}
        style={styles.accord}>
          <DataTable.Row>
       <DataTable.Cell numeric>ABO101597 MIROSLAV Jovanovic</DataTable.Cell>
       <DataTable.Cell numeric>8:00 - 12:00</DataTable.Cell>
       <DataTable.Cell numeric>4h</DataTable.Cell>
       <DataTable.Cell numeric>No</DataTable.Cell>
       <DataTable.Cell numeric> Description of job</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell numeric>LUNCH</DataTable.Cell>
       <DataTable.Cell numeric>12:00</DataTable.Cell>
       <DataTable.Cell numeric>1h</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
     </DataTable.Row>
      </List.Accordion>
      
      <Divider />
      
      <List.Accordion
        title="Thrusday"
        expanded={expanded}
        onPress={handlePress}
        style={styles.accord}>
          <DataTable.Row>
       <DataTable.Cell numeric>ABO101597 MIROSLAV Jovanovic</DataTable.Cell>
       <DataTable.Cell numeric>8:00 - 12:00</DataTable.Cell>
       <DataTable.Cell numeric>4h</DataTable.Cell>
       <DataTable.Cell numeric>No</DataTable.Cell>
       <DataTable.Cell numeric> Description of job</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell numeric>LUNCH</DataTable.Cell>
       <DataTable.Cell numeric>12:00</DataTable.Cell>
       <DataTable.Cell numeric>1h</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
     </DataTable.Row>
      </List.Accordion>
      
      <Divider />
      
      <List.Accordion
        title="Friday"
        expanded={expanded}
        onPress={handlePress}
        style={styles.accord}>
          <DataTable.Row>
       <DataTable.Cell numeric>ABO101597 MIROSLAV Jovanovic</DataTable.Cell>
       <DataTable.Cell numeric>8:00 - 12:00</DataTable.Cell>
       <DataTable.Cell numeric>4h</DataTable.Cell>
       <DataTable.Cell numeric>No</DataTable.Cell>
       <DataTable.Cell numeric> Description of job</DataTable.Cell>
     </DataTable.Row>
     <DataTable.Row>
       <DataTable.Cell numeric>LUNCH</DataTable.Cell>
       <DataTable.Cell numeric>12:00</DataTable.Cell>
       <DataTable.Cell numeric>1h</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
       <DataTable.Cell numeric>-</DataTable.Cell>
     </DataTable.Row>
      </List.Accordion>
      <Divider />
    </List.Section>
       </View>

       <View style={styles.edit}>
      <Button title="Edit" color="#09253a" onPress={acceptHandler}/>
    </View>

    <View style={styles.add}>
      <Button title="Add" color="#09253a" onPress={cancelHandler}/>
    </View>

    <View style={styles.delete}>
      <Button title="Delete" color="#FF0000" onPress={cancelHandler}/>
    </View>


    <View style={styles.submit}>
    <Button title="Submit" color="#4bf542" onPress={pressHandler}/>
    </View>
      
  </View>
   </ScrollView>
    
);
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 18,
      paddingTop: 35,
      backgroundColor: '#ffffff'
      },
    addicon: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: -15
      },
      title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      datePickerStyle: {
        width: 200,
        marginTop: 20,
      },
      listcollapse: {
        marginBottom: 40
      },
      accord: {
        backgroundColor: '#dbcbca',
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 5
      },


    edit: {
      marginLeft:130,
      marginTop:-24,
      height: 20, 
      width: 100,
  },

    add: {
      marginLeft:10,
      marginTop:-20,
      height: 50, 
      width: 100
  },
  delete: {
    marginLeft:250,
    marginTop:-50,
    height: 50, 
    width: 100
},

submit: {
  marginLeft:250,
  marginTop:0,
  height: 50, 
  width: 100
}
  });
  
