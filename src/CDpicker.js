import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, {Component} from 'react'

class CDPickerComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userType: '',
        name: '',
    }
}

renderUserNames() {
  if(this.state.userType=='Freelancer'){
   return [<Picker.Item label="Freelancer 1" value="Freelancer 1" />,
          <Picker.Item label="Freelancer 2" value="Freelancer 2" />]
  }else{
       return [<Picker.Item label="Client 1" value="Client 1" />,
        <Picker.Item label="Client 2" value="Client 2" />]
    }
}


render() {
  let options=this.renderUserNames();
  return (
    <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleStyle}>User Type</Text>
              <View style={styles.pickerStyle}>
                  {<Picker
                      mode='dropdown'
                      selectedValue={this.state.userType}
                      onValueChange={(itemValue, itemIndex) =>
                          this.setState({ userType: itemValue })
                      }>
                      <Picker.Item label="Select User Type" value="" />
                      <Picker.Item label="Freelancer" value="Freelancer" />
                      <Picker.Item label="Client" value="Client" />
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
  );
   };
}

  const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  }, 

  titleStyle: {
    paddingTop:25,
    marginLeft:-40
    },

  pickerStyle: {
    width:300,
    paddingTop:40,
    marginLeft:-45,
    marginBottom:0
    }
  })
  
  export default CDPickerComponent;