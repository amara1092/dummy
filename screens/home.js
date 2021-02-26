import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList,SafeAreaView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Calenders from '../src/Calenders';
import WeekSelect from '../src/weekend';
import { DatabaseConnection } from '../src/database-connection';

const db = DatabaseConnection.getConnection();

export default function Home ({ navigation }) {

    let [flatListItems, setFlatListItems] = useState([]);
  
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM table_user',
          [],
          (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          }
        );
      });
    }, []);
  
 const pressHandler = () => 
 {
   navigation.navigate('Lunch')
 }

 let listItemView = (item) => {
  return (
    <View
      key={item.user_id}
      style={{ backgroundColor: '#EEE', marginTop: 20, padding: 30, borderRadius: 10 }}>
      <Text style={styles.textheader}>Código</Text>
      <Text style={styles.textbottom}>{item.id_timesheet}</Text>

      <Text style={styles.textheader}>User ID</Text>
      <Text style={styles.textbottom}>{item.user_id}</Text>

      <Text style={styles.textheader}>Week Ending</Text>
      <Text style={styles.textbottom}>{item.eow}</Text>

      <Text style={styles.textheader}>Date</Text>
      <Text style={styles.textbottom}>{item.date}</Text>

      <Text style={styles.textheader}>Project Number</Text>
      <Text style={styles.textbottom}>{item.projNum}</Text>

      <Text style={styles.textheader}>Comment</Text>
      <Text style={styles.textbottom}>{item.comment}</Text>

      <Text style={styles.textheader}>Arrival Time</Text>
      <Text style={styles.textbottom}>{item.arrivalTime}</Text>

      <Text style={styles.textheader}>Depart Time</Text>
      <Text style={styles.textbottom}>{item.departTime}</Text>

      <Text style={styles.textheader}>Total Hours</Text>
      <Text style={styles.textbottom}>{item.totalHrs}</Text>

      <Text style={styles.textheader}>Site ID</Text>
      <Text style={styles.textbottom}>{item.siteID}</Text>


    </View>
  );
};

   return (
    <View style={styles.container}>
<WeekSelect/>
        <View style={styles.text}>
        <Text>Add an entry</Text>
        </View>

        <View style={styles.icons}>
            <MaterialIcons name='add-circle-outline' size={55} onPress={pressHandler}/>
        </View>

        <View style={styles.text1}>
        <Text>You have no entries for this week</Text>
        <FlatList
            style={{ marginTop: 0 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
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
  