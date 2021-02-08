import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, {Component} from 'react'

class FormComponent extends Component{

    state = {

       language:'english'
    }

    render(){
        return (
            <View style={styles.container}>
            <View style={styles.project}>
                <Text>
                    Project
                </Text>
            </View>
                <Picker style={styles.date}
                    selectedValue={this.state.date}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({date: itemValue})
                    }>
                            <Picker.Item label="Please Select" value="1" />
                            </Picker>

                    <View style={styles.jobtitle}>
                    <Text>
                        Job Title
                    </Text>
                     </View>
                    <Picker style={styles.datetwo}
                    selectedValue={this.state.datetwo}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({datetwo: itemValue})
                    }>
                           <Picker.Item label="Please Select" value="1" />
                            </Picker>
                    <View style={styles.jobsubtitle}>
                    <Text>
                        Job Sub Title
                    </Text>
                     </View>
                            <Picker style={styles.datethree}
                    selectedValue={this.state.datethree}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({datethree: itemValue})
                    }>
                           <Picker.Item label="Please Select" value="1" />
                            </Picker>

                            <View style={styles.travelto}>
                    <Text>
                        Travel To
                    </Text>
                     </View>
                     <View style={styles.travelfrom}>
                    <Text>
                        Travel From  
                    </Text>
                     </View>
                            <Picker style={styles.datefour}
                    selectedValue={this.state.datefour}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({datefour: itemValue})
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

                    <View style={styles.startwork}>
                    <Text>
                        Start Work  
                    </Text>
                     </View>
                     <View style={styles.finishwork}>
                    <Text>
                        Finish Work  
                    </Text>
                     </View>
                            <Picker style={styles.datefive}
                    selectedValue={this.state.datefive}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({datefive: itemValue})
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

                     
                            <Picker style={styles.datesix}
                    selectedValue={this.state.datesix}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({datesix: itemValue})
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

                            <Picker style={styles.dateseven}
                    selectedValue={this.state.dateseven}
                    onValueChange=
                    {
                        (itemValue, itemIndex) => this.setState({dateseven: itemValue})
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


        )




    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      }, 

      project: {
        marginTop: 40,
        marginLeft:-300,
        marginBottom:-50
        
      }, 

      date: {
        marginTop:50,
        marginLeft:0,
        height: 50, 
        width: 360
      }, 

      jobtitle: {
        marginTop: 20,
        marginLeft:-290,
        marginBottom:-50
        
      }, 

      datetwo: {
        marginTop:45,
        marginLeft: 0,
        height: 50, 
        width: 360
      },

      jobsubtitle: {
        marginTop: 20,
        marginLeft:-266,
        marginBottom:-50
        
      }, 
      datethree: {
        marginTop:45,
        marginLeft: 0,
        height: 50, 
        width: 360
      },

      travelto: {
        marginTop: 20,
        marginLeft:-277,
        marginBottom:-40
        
      }, 
      datefour: {
        marginLeft:-220,
        marginTop:60,
        height: 20, 
        width: 130
      },
      startwork: {
        marginTop: 20,
        marginLeft:-277,
        marginBottom:-50
        
      }, 
      datefive: {
        marginLeft:-220,
        marginTop:70,
        height: 20, 
        width: 130
      },    

      travelfrom: {
        marginTop: 20,
        marginLeft:20,
        marginBottom:-50
      },
      datesix: {
        marginLeft:60,
        marginTop:-20,
        height: 20, 
        width: 130
      },

      finishwork: {
        marginTop: 30,
        marginLeft:20,
        marginBottom:-50
        
      }, 
      dateseven: {
        marginLeft:60,
        marginTop:-99,
        height: 20, 
        width: 130
      }      
});
export default FormComponent;