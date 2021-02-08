import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Tables extends Component {
    constructor(props) {
        super(props);
        this.state = {
          HeadTable: ['Project details', 'Start/End', 'Hours', 'Travel', 'Description'],
          DataTable: [
            
          ]
        }
}

render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText1}/>
        </Table>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 0,
      paddingTop: 35,
      backgroundColor: '#ffffff', 
    },
    HeadStyle: { 
      height: 50,
      alignContent: "center",
      backgroundColor: '#09253a',
      borderRadius: 15
    },
    TableText: { 
      margin: 10,
      color: 'white'
    },
    TableText1: {
      margin: 10,
    color: 'black'
  }
  });