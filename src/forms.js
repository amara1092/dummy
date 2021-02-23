import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Button, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import XDate from 'xdate';
import { withNavigation } from 'react-navigation';



class ShiftTimingScreen extends Component {

    state = {

        dayoftheweek:'',
        userType: '',
        name: '',
        description: '',
        // The values, which we get from each of the DateTimePickers. 
        // These values can be saved into your app's state. 
        ToSTimeValue: null,
        ToTimeValue: null,

        // for iOS & Android: When this flag is true, the relevant <DateTimePicker> is displayed
        isToSTimePickerVisible: false,
        isToTimePickerVisible: false,

        // The value of the <DateTimePicker> is stored in this variable, which is used to pass data between the date & time pickers 
        dateOrTimeValue: null, 

        // ONLY FOR ANDROID: note that the current version of the <DateTimePicker> does NOT support "datetime" mode on Android.
        // So, I am using the following 2 flags (datePickerVisible & timePickerVisible) to provide this functionality.

        // (1) ONLY FOR ANDROID: When the datePickerVisible flag is true, the <DateTimePicker> is displayed in "date" mode
        datePickerVisible: false, 

        // (2) ONLY FOR ANDROID: When the timePickerVisible flag is true, the <DateTimePicker> is displayed in "time" mode
        timePickerVisible: false,
    };

    saveStartingTime = (value) => {
        console.log("saveStartingTime - value:", value);
        this.setState({
            ToSTimeValue: value,
        });
    };


    saveEndingTime = (value) => {
        console.log("saveEndingTime - value:", value);
        this.setState({
            ToTimeValue: value,
        });
    };

    async componentDidMount() {
        try {
          const result = JSON.parse(await AsyncStorage.getItem("personal_data"));
      
          // populate the data
          this.setState({...result}); // you probably won't understand what is triple dot doing
          // Google for Javascript object spreading syntax
          // Checkout https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
      
        } catch (error) {
          alert(error.message)
        }
      }

      acceptHandler() 
    {
        this.props.navigation.navigate('Homend');
    }
    cancelHandler() 
    {
    this.props.navigation.navigate('Lunch');
    }
    handleDesription = (text) => {
        this.setState({description: text})
    }

    UpdateContent = async () => {
            try {
            const result = await AsyncStorage.setItem("personal_data", JSON.stringify(this.state));
            alert("Success");
            this.acceptHandler();
            } catch (error) {
            alert(error.message);
            }  
    }


      renderUserNames() {
        if(this.state.userType=='Freelancer'){
         return [<Picker.Item key="uniqueID8" label="CE005 ~ Woodcock Hill" value="Freelancer 1" />,
                <Picker.Item key="uniqueID7" label="CE006 ~ Crusheen knocknamucky" value="Freelancer 2" />,
               <Picker.Item key="uniqueID6" label="CE007 ~ Lack West" value="Freelancer 3" />,
               <Picker.Item key="uniqueID5" label="CE008 ~ Dangan Ballyvaughan" value="Freelancer 4" />,
               <Picker.Item key="uniqueID4" label="CE009 ~ Glenagall" value="Freelancer 5" />]
        }
      
        else if(this.state.userType=='ABO101597'){
          return [<Picker.Item key="uniqueID3" label="CLS001 ~ Cluster 1 OHL" value="ABO101597 1" />
                ]
         }
      
        else{
             return [<Picker.Item key="uniqueID1" label="Client 1" value="Client 1" />,
              <Picker.Item key="uniqueID2" label="Client 2" value="Client 2" />]
          }
      }





    fRenderDateTimePicker = (dateTimePickerVisible, visibilityVariableName, dateTimePickerMode, defaultValue, saveValueFunctionName ) => {
        // dateTimePickerVisible:   a flag, which is used to show/hide this DateTimePicker
        // visibilityVariableName:              the name of the state variable, which controls showing/hiding this DateTimePicker. 
            // The name of the variable is received in (visibilityVariableName), and the value of it is received in the argument (dateTimePickerVisible).
        // dateTimePickerMode:      the mode mode of this DateTimePicker
        // defaultValue:                the default value, which should be selected initially when the DatTimePicker is displayed 
        // saveValueFunctionName:   the function, which would be called after the user selects a value. 
            // In my case it is a Redux's action creator, which saves the selected value in the app's state. 

        return (
            <View>



                {/* A. For iOS, display the picker in "date", "time" or "datetime" mode - No need for any customisation */}
                {Platform.OS === 'ios' && dateTimePickerVisible &&
                    (<DateTimePicker
                        mode={dateTimePickerMode}
                        value={defaultValue}

                        onChange={ (event, value) => {
                            this.setState({
                                dateOrTimeValue: value,

                                // We are done. Hide the <DatTimePicker>
                                // Technically speaking, since this part of the script is only relevant to a certain platform, I don't need to check for the platform (below). 
                                // Note that [visibilityVariableName] refers to the NAME of a state variable
                                [visibilityVariableName]: Platform.OS === 'ios' ? true : false,
                            });

                            if (event.type === "set") {
                                saveValueFunctionName(value);
                                // console.log("visibilityVariableName:", [visibilityVariableName], " - value:", value); 
                            }

                        }}
                    />)}

                {/* B.1 For Android - "date" mode:      display the picker in "date" mode */}
                {/*       For Android - "datetime" mode: display the picker in "date" mode (to be followed by another picker (below) in "time" mode) */}
                {Platform.OS === 'android' && dateTimePickerVisible && this.state.datePickerVisible &&
                    (<DateTimePicker
                        mode={"date"}
                        display='default' // 'default', 'spinner', 'calendar', 'clock' // Android Only 
                        value={defaultValue}

                        onChange={ (event, value) => {
                            this.setState({
                                // In case of (mode == datetime), the TIME part will be added to "dateOrTimeValue" using another DateTimePicker (below).
                                dateOrTimeValue: value,
                                datePickerVisible: false,
                            });

                            // When the mode is "datetime" & this picker was set (the user clicked on OK, rather than cancel), 
                            // we need to display another DateTimePicker in TIME mode (below) 
                            if (event.type === "set" && dateTimePickerMode === "datetime") {
                                this.setState({
                                    timePickerVisible: true,
                                });
                            }

                            // When the mode is "date" & this picker was set (the user clicked on OK, rather than cancel), 
                            // (1) We need to hide this picker. 
                            // (2) Save the data. Otherwise, do nothing. Date will be saved after the TIME picker is launched (below). 
                            else if (event.type === "set" && dateTimePickerMode === "date") {
                                // console.log("saveValueFunctionName: ", saveValueFunctionName); 
                                this.setState({ 
                                    [visibilityVariableName]: Platform.OS === 'ios' ? true : false, 
                                }); 

                                saveValueFunctionName(value);
                                // console.log("visibilityVariableName:", [visibilityVariableName], " - value:", value); 
                            }

                        }}
                    />)}

                {/* B.2 For Android - "time" mode:      display the picker in "time" mode */}
                {/*       For Android - "datetime" mode: display the picker in "time" mode (following another picker (above) in "date" mode) */}
                {Platform.OS === 'android' && dateTimePickerVisible && this.state.timePickerVisible &&
                    (<DateTimePicker
                        mode={"time"}
                        display='spinner' // 'default', 'spinner', 'calendar', 'clock' // Android Only 
                        is24Hour={false} // Android Only 
                        value={defaultValue}

                        onChange={(event, value) => {
                            // 1. In case of (mode == "time"), (value) is assigned to (newDateTime), which will be used below (as is with no additions)
                            let newDateTime = value;

                            // 2. In case of (mode == "datetime"), 
                            if (event.type === "set" && dateTimePickerMode === "datetime") {

                                // 2.1. Get the (date) part from the previously displayed DATE picker, which saved its value into (this.state.dateValue)
                                newDateTime = this.state.dateOrTimeValue;

                                // 2.2. Get the (hours & minutes) parts from this TIME Picker, which saved its value into (value) 
                                const newHours = value.getHours();
                                const newMinutes = value.getMinutes();

                                // 2.3 Combine 2.1 & 2.2 (above) into (newDateTime).
                                newDateTime.setHours(newHours);
                                newDateTime.setMinutes(newMinutes);
                                newDateTime.setSeconds(0);
                            }

                            this.setState({
                                dateOrTimeValue: newDateTime,
                                datePickerVisible: false,
                                timePickerVisible: false,

                                // We are done. Hide the <DatTimePicker>
                                // Technically speaking, since this part of the script is only relevant to a certain platform, I don't need to check for the platform (below). 
                                [visibilityVariableName]: Platform.OS === 'ios' ? true : false,
                            });

                            if (event.type === "set") {
                                saveValueFunctionName(newDateTime);
                                // console.log("visibilityVariableName:", [visibilityVariableName], " - newDateTime:", newDateTime); 
                            } 
                        }}

                    />)} 
            </View>
        );      
    }; 

    // This function formats date values. Obviously, using it is optional. 
    // If you decide to use it, remember that it needs the XDate library: 
    // import XDate from 'xdate';
    fFormatDateTime = (date1, format1 = "datetime") => {
        // date1:   the date to be formatted 
        // format1: the date mode - "datetime" , "date" OR "time"
        if (date1 === null) {
            return null;
        }

        // else:
        const format2 = format1.toLowerCase();
        let dateFormatted;
        const date2 = new XDate(date1);

        switch (format2) {
            case "datetime": {
                dateFormatted = date2.toString('dd/MM/yyyy - hh:mm TT');
                return dateFormatted;
            }
            case "date": {
                dateFormatted = date2.toString('dd/MM/yyyy');
                return dateFormatted;
            }
            case "time": {
                dateFormatted = date2.toString('hh:mm TT');
                return dateFormatted;
            }
            default:
                return null;
        } 
    };

    // This function shows/hides the initial DateTimePicker 
    // If the mode is "datetime", another picker will be displayed by the DATE picker 
    fRenderDatePicker = (mode, visibilityVariableName) => {
        // mode:                        specifies the mode of the <DateTimePicker> 
        // visibilityVariableName:  the name of the state variable, which controls showing/hiding this DateTimePicker. 
        switch (mode) {
            case "datetime":
                return this.setState({ [visibilityVariableName]: true, datePickerVisible: true, timePickerVisible: false });
            case "date":
                return this.setState({ [visibilityVariableName]: true, datePickerVisible: true, timePickerVisible: false });
            case "time":
                return this.setState({ [visibilityVariableName]: true, datePickerVisible: false, timePickerVisible: true });
        }
    }

    render() {
        // 1. For the "Shift Start", Initial/Default value for the DateTimePicker 
        // // defaultShiftStartDateTime: (tomorrow's date at 9 AM)
        let defaultShiftStartDateTime = new Date();
        defaultShiftStartDateTime.setDate(defaultShiftStartDateTime.getDate() + 1);
        defaultShiftStartDateTime.setHours(9);
        defaultShiftStartDateTime.setMinutes(0);
        defaultShiftStartDateTime.setSeconds(0);

        // 2. For the "Shift End", Initial/Default value for the DateTimePicker 
        let defaultShiftEndDateTime = new Date();
        defaultShiftEndDateTime.setDate(defaultShiftEndDateTime.getDate() + 1);
        defaultShiftEndDateTime.setHours(17);
        defaultShiftEndDateTime.setMinutes(0);
        defaultShiftEndDateTime.setSeconds(0);

        let options=this.renderUserNames();

        return (
                <View style={styles.container}>
                    {// This function would render the necessary DateTimePicker only if the relevant state variable is set (above)
                    this.fRenderDateTimePicker(
                        this.state.isStartingDateTimePickerVisible,
                        "isStartingDateTimePickerVisible",

                        // THE FOLLOWING ARGUMENT VALUE IS THE (2nd place OF 2) PLACES, WHICH DIFFERENTIATE BETWEEN THE DIFFERENT MODES (DATETIME, DATE & TIME)
                        "datetime",

                        defaultShiftStartDateTime,

                        // This is my function, which saves the selected value to my app's state. 
                        // YOU NEED TO REPLACE IT WITH SOMETHING RELEVANT TO YOUR APP. 
                        this.saveStartingDateTime,
                    )}

                    {this.fRenderDateTimePicker(
                        this.state.isToDatePickerVisible,
                        "isToDatePickerVisible",
                        "date",
                        defaultShiftEndDateTime,

                        // This is my function, which saves the selected value to my app's state. 
                        // YOU NEED TO REPLACE IT WITH SOMETHING RELEVANT TO YOUR APP. 
                        this.saveEndingDate,
                    )}
                    
                    <View style={styles.props}>
                    <TouchableOpacity style={styles.startlunch}
                        onPress={() => {
                            // this.setState({ isToTimePickerVisible: true, });
                            this.fRenderDatePicker("time", "isToSTimePickerVisible");
                        }}>
                        <Input
                            label='Start Work'
                            placeholder={"09:00 AM"}
                            editable={false}
                            value={this.fFormatDateTime(this.state.ToSTimeValue, "time")}
                        />
                    </TouchableOpacity>
                    {this.fRenderDateTimePicker(
                        this.state.isToSTimePickerVisible,
                        "isToSTimePickerVisible",
                        "time",
                        defaultShiftEndDateTime,

                        // This is my function, which saves the selected value to my app's state. 
                        // YOU NEED TO REPLACE IT WITH SOMETHING RELEVANT TO YOUR APP. 
                        this.saveStartingTime,
                    )}

                    <TouchableOpacity style={styles.endlunch}
                        onPress={() => {
                            // this.setState({ isToTimePickerVisible: true, });
                            this.fRenderDatePicker("time", "isToTimePickerVisible");
                        }}>
                        <Input
                            label='Finish Work'
                            placeholder={"09:00 AM"}
                            editable={false}
                            value={this.fFormatDateTime(this.state.ToTimeValue, "time")}
                        />
                    </TouchableOpacity>
                    {this.fRenderDateTimePicker(
                        this.state.isToTimePickerVisible,
                        "isToTimePickerVisible",
                        "time",
                        defaultShiftEndDateTime,

                        // This is my function, which saves the selected value to my app's state. 
                        // YOU NEED TO REPLACE IT WITH SOMETHING RELEVANT TO YOUR APP. 
                        this.saveEndingTime,
                    )}
                    </View>

                <View style={styles.btn}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleStyle}>Project No</Text>
              <View style={styles.pickerStyle}>
                  {<Picker
                      mode='dropdown'
                      selectedValue={this.state.userType}
                      onValueChange={(itemValue, itemIndex) =>
                          this.setState({ userType: itemValue })
                      }>
                      <Picker.Item key="uniqueID9" label="Please Select" value="" />
                      <Picker.Item key="uniqueID10" label="VOD103015 ~ Assure Provide engsupport Oct 1st to Oct 31st 2019" value="Freelancer" />
                      <Picker.Item key="uniqueID11" label="ABO101597 ~ Over head Line works Cluster 1 ~ CLS001 ~ Cluster1 OHL" value="ABO101597" />
                      <Picker.Item key="uniqueID12" label="Client" value="Client" />
                  </Picker>}
              </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleStyle}>Name</Text>
              <View style={styles.pickerStyle}>
                  {<Picker
                      mode='dropdown'
                      selectedValue={this.state.name}
                      onValueChange={(itemValue, itemIndex) =>
                          this.setState({ name: itemValue })
                      }>
                      <Picker.Item label="Please Select" value="" />
                           {options}
  
                  </Picker>}
              </View>
          </View>
         </View>
            <View>
                <View style={styles.accept}>
                     <Button backgroundColor='#000000' color='#1df557' title="Confirm" onPress={
                    this.UpdateContent
            } />
                </View>
                <View style={styles.cancel}>
                <Button title="Cancel" color="#FF0000" onPress={this.cancelHandler}/>
                </View>
            </View>

            <View style={styles.desprc}>
            <TextInput
                        underlineColorAndroid = "transparent" 
                        placeholder="Description"
                        placeholderTextColor = "#9a73ef"
                        onChangeText={this.handleDesription}
                        style={styles.input}     
                        />
            </View>

           
           
        </View>
        );
    } // end of: render()
} // end of: component

const styles = StyleSheet.create({
    props: {
      alignItems:'center',
      justifyContent:'center'
       },
       desprc: {
        marginTop: -110,
        marginBottom: 800,
        width: 300,
       },
       input: {
        borderWidth: 1,
        borderColor: '#7a42f4',
        padding:20,
        height: 150, 
        width: 300,
        paddingBottom: 100,
        marginTop: -125,
        marginBottom: 800,
        borderWidth: 1,
        color: '#000000'
     },

      startlunch: {
       marginTop: 50,
       marginLeft:-170,
       
      },

      endlunch: {
        marginTop:-88,
        marginLeft:100
       },

       dayoftheweekTitle: {
           marginTop: 80,
           width:300
        },

       dayoftheweek: {
       marginTop: 40,
       marginBottom: -200
       },
  
      text: {
        marginTop:-28,
        marginLeft:40
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        }, 
      
        titleStyle: {
          paddingTop:65,
          marginLeft:-40,
          padding: 10,
          paddingBottom: -120
          },
      
        pickerStyle: {
          width:225,
          paddingTop:50,
          marginLeft:55,
          marginRight: -40,
          marginBottom:0
          },
          updBtn: {
            padding: 10,
            backgroundColor: '#000000'            
            },
            accept: {
                marginLeft:200,
                marginTop: 275,
                height: 20, 
                width: 130,
            },
        
              cancel: {
                marginLeft:0,
                marginTop:-20,
                height: 50, 
                width: 130
            },
    });
  

export default withNavigation(ShiftTimingScreen);
