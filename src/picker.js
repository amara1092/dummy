import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, {Component} from 'react'

class PickerComponent extends Component{

    state = {

        date:'hh:mm',
        datetwo:'hh:mm'
    }

    render(){
        return (
            
            <View style={styles.container}>
             <View style={styles.startlunch}>
                <Text>
                    Start Lunch Time
                </Text>
            </View>  

            <View style={styles.finishlunch}>
                <Text>
                    Finish Lunch Time
                </Text>
            </View>  

            <View> 
                <Picker style={styles.date}
                    selectedValue={this.state.date}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({date: itemValue})
                    }>
                            <Picker.Item label="00:00" value="1" />
                            <Picker.Item label="00:30" value="2" />
                            <Picker.Item label="01:00" value="3" />
                            <Picker.Item label="01:30" value="4" />
                            <Picker.Item label="02:00" value="5" />
                            <Picker.Item label="02:30" value="6" />
                            <Picker.Item label="03:00" value="7" />
                            <Picker.Item label="03:30" value="8" />
                            <Picker.Item label="04:00" value="9" />
                            <Picker.Item label="04:30" value="10" />
                            <Picker.Item label="05:00" value="11" />
                            <Picker.Item label="05:30" value="12" />
                            <Picker.Item label="06:00" value="13" />
                            <Picker.Item label="06:30" value="14" />
                            <Picker.Item label="07:00" value="15" />
                            <Picker.Item label="07:30" value="16" />
                            <Picker.Item label="08:00" value="17" />
                            <Picker.Item label="08:30" value="18" />
                            <Picker.Item label="09:00" value="19" />
                            <Picker.Item label="09:30" value="20" />
                            <Picker.Item label="10:00" value="21" />
                            <Picker.Item label="10:30" value="22" />
                            <Picker.Item label="11:00" value="23" />
                            <Picker.Item label="11:30" value="24" />
                            <Picker.Item label="12:00" value="25" />
                            <Picker.Item label="12:30" value="26" />
                            <Picker.Item label="13:00" value="27" />
                            <Picker.Item label="13:30" value="28" />
                            <Picker.Item label="14:00" value="29" />
                            <Picker.Item label="14:30" value="30" />
                            <Picker.Item label="15:00" value="31" />
                            <Picker.Item label="15:30" value="32" />
                            <Picker.Item label="16:00" value="33" />
                            <Picker.Item label="16:30" value="34" />
                            <Picker.Item label="17:00" value="35" />
                            <Picker.Item label="17:30" value="36" />
                            <Picker.Item label="18:00" value="37" />
                            <Picker.Item label="18:30" value="38" />
                            <Picker.Item label="19:00" value="39" />
                            <Picker.Item label="19:30" value="40" />
                            <Picker.Item label="20:00" value="41" />
                            <Picker.Item label="20:30" value="42" />
                            <Picker.Item label="21:00" value="43" />
                            <Picker.Item label="21:30" value="44" />
                            <Picker.Item label="22:00" value="45" />
                            <Picker.Item label="22:30" value="46" />
                            <Picker.Item label="23:00" value="47" />
                            <Picker.Item label="23:30" value="48" />
                            </Picker>
                            </View>
                            <View>
                    <Picker style={styles.datetwo}
                    selectedValue={this.state.datetwo}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({datetwo: itemValue})
                    }>
                            <Picker.Item label="00:00" value="1" />
                            <Picker.Item label="00:30" value="2" />
                            <Picker.Item label="01:00" value="3" />
                            <Picker.Item label="01:30" value="4" />
                            <Picker.Item label="02:00" value="5" />
                            <Picker.Item label="02:30" value="6" />
                            <Picker.Item label="03:00" value="7" />
                            <Picker.Item label="03:30" value="8" />
                            <Picker.Item label="04:00" value="9" />
                            <Picker.Item label="04:30" value="10" />
                            <Picker.Item label="05:00" value="11" />
                            <Picker.Item label="05:30" value="12" />
                            <Picker.Item label="06:00" value="13" />
                            <Picker.Item label="06:30" value="14" />
                            <Picker.Item label="07:00" value="15" />
                            <Picker.Item label="07:30" value="16" />
                            <Picker.Item label="08:00" value="17" />
                            <Picker.Item label="08:30" value="18" />
                            <Picker.Item label="09:00" value="19" />
                            <Picker.Item label="09:30" value="20" />
                            <Picker.Item label="10:00" value="21" />
                            <Picker.Item label="10:30" value="22" />
                            <Picker.Item label="11:00" value="23" />
                            <Picker.Item label="11:30" value="24" />
                            <Picker.Item label="12:00" value="25" />
                            <Picker.Item label="12:30" value="26" />
                            <Picker.Item label="13:00" value="27" />
                            <Picker.Item label="13:30" value="28" />
                            <Picker.Item label="14:00" value="29" />
                            <Picker.Item label="14:30" value="30" />
                            <Picker.Item label="15:00" value="31" />
                            <Picker.Item label="15:30" value="32" />
                            <Picker.Item label="16:00" value="33" />
                            <Picker.Item label="16:30" value="34" />
                            <Picker.Item label="17:00" value="35" />
                            <Picker.Item label="17:30" value="36" />
                            <Picker.Item label="18:00" value="37" />
                            <Picker.Item label="18:30" value="38" />
                            <Picker.Item label="19:00" value="39" />
                            <Picker.Item label="19:30" value="40" />
                            <Picker.Item label="20:00" value="41" />
                            <Picker.Item label="20:30" value="42" />
                            <Picker.Item label="21:00" value="43" />
                            <Picker.Item label="21:30" value="44" />
                            <Picker.Item label="22:00" value="45" />
                            <Picker.Item label="22:30" value="46" />
                            <Picker.Item label="23:00" value="47" />
                            <Picker.Item label="23:30" value="48" />
                            </Picker>
            </View>
            </View> 


        )




    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }, 

      startlunch: {
        marginTop:250,
        marginBottom:-30,
        marginLeft:-180,
        height: 50, 
        width: 130
      }, 

      finishlunch: {
        marginTop:-20,
        marginBottom:-30,
        marginLeft:180,
        height: 50, 
        width: 130
      }, 

      date: {
        marginTop:-0,
        marginLeft:-160,
        height: 50, 
        width: 130
      }, 

      datetwo: {
        marginLeft:180,
        marginTop:-34,
        height: 20, 
        width: 130
      } 
});
export default PickerComponent;