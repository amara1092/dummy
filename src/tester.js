import React, { Component } from "react";
import {View, TextInput,Text, Button} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { Picker } from '@react-native-picker/picker'; 

export default class tester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "",
      educationLevel: "",
      receivePromotion: false
    };
  }

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


  render() {
    return (
      <View>
        <TextInput placeholder="Name" value={this.state.name}
          onChangeText={(name) => this.setState({name})} 
        />

        <TextInput placeholder="Email" value={this.state.email}
          onChangeText={(email) => this.setState({email})} 
        />

        <Text>{"\n\nGender"}</Text>
        <Picker mode="dropdown" selectedValue={this.state.gender} 
          onValueChange={(itemValue, itemIndex) => {
            this.setState({gender: itemValue})
        }}>
          <Picker.Item label="Male" value="m"/>
          <Picker.Item label="Female" value="f" />
        </Picker>

        <Text>{"\n\nEducation level"}</Text>
        <Picker mode="dropdown" selectedValue={this.state.educationLevel}
          onValueChange={(educationLevel) => {this.setState({educationLevel})}} 
        >
          <Picker.Item label="High school" value="hs"/>
          <Picker.Item label="Undergraduate" value="ug"/>
          <Picker.Item label="Postgraduate" value="pg"/>
        </Picker>

        <Text>{"\n\nReceive promotions"}</Text>
        <Picker selectedValue={this.state.receivePromotion} mode="dropdown"
          onValueChange={(receivePromotion) => this.setState({receivePromotion})} 
        >
          <Picker.Item label="Yes" value="y"/>
          <Picker.Item label="No" value="n"/>
        </Picker>

        <Button title="Update data" onPress={async () => {
          try {
            const result = await AsyncStorage.setItem("personal_data", JSON.stringify(this.state));
            alert("Success");
          } catch (error) {
            alert(error.message);
          }
        }}/>

      </View>
    );
  }
}