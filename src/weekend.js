import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import WeekSelector from 'react-native-week-selector';

export default class WeekSelect extends React.Component {

  state = {
    selectedWeek: null,
  }
  saveStartingWeek = (value) => {
    console.log("saveStartingWeek - value:", value + 1);
    this.setState({
      selectedWeek: value,
    });
};
  
  render() {
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.text}>Week Ending</Text>
          <WeekSelector
            dateContainerStyle={styles.date}
            whitelistRange={[new Date(2018, 7, 13), new Date()]}
            weekStartsOn={6}
            onWeekChanged={this.saveStartingWeek}
          />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    height: 100,
    width:370,
    marginTop:-155,
    marginBottom: 30,
    backgroundColor: '#e8dddc',
  },
  date: {
    flex: 1,
    fontWeight: 'bold',
  },
  text: {
    paddingLeft: 10,
    fontSize: 22,
    fontWeight: 'bold'
  },
});