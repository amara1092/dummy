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
      accept: {
        marginLeft: -20,
        marginTop:-29,
        height: 20, 
        width: 130
    },

      cancel: {
        marginLeft: 299,
        marginTop:-70,
        height: 50, 
        width: 130
    },
  });
  
