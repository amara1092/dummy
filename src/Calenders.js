import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

class Calenders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
          <View style={styles.headercomp}>
          <Text style={styles.datestyle}>DATE:       { startDate }</Text>
        </View>
        <CalendarPicker
          onDateChange={this.onDateChange}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 15,
  },
  datestyle: {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
    fontWeight: 'bold',
    paddingTop: 10
  },
  headercomp: {
      backgroundColor: 'pink',
      padding: 1,
      borderRadius: 10
  }
});

export default Calenders;