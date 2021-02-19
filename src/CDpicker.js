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
   return [<Picker.Item label="CE005 ~ Woodcock Hill" value="Freelancer 1" />,
          <Picker.Item label="CE006 ~ Crusheen knocknamucky" value="Freelancer 2" />,
         <Picker.Item label="CE007 ~ Lack West" value="Freelancer 3" />,
         <Picker.Item label="CE008 ~ Dangan Ballyvaughan" value="Freelancer 4" />,
         <Picker.Item label="CE009 ~ Glenagall" value="Freelancer 5" />]
  }

  else if(this.state.userType=='ABO101597'){
    return [<Picker.Item label="CLS001 ~ Cluster 1 OHL" value="ABO101597 1" />
          ]
   }

  else{
       return [<Picker.Item label="Client 1" value="Client 1" />,
        <Picker.Item label="Client 2" value="Client 2" />]
    }
}


render() {
  let options=this.renderUserNames();
  return (
    <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleStyle}>Project No</Text>
              <View style={styles.pickerStyle}>
                  {<Picker
                      mode='dropdown'
                      selectedValue={this.state.userType}
                      onValueChange={(itemValue, itemIndex) =>
                          this.setState({ userType: itemValue })
                      }>
                      <Picker.Item label="Please Select" value="" />
                      <Picker.Item label="VOD103015 ~ Assure Provide engsupport Oct 1st to Oct 31st 2019" value="Freelancer" />
                      <Picker.Item label="ABO101597 ~ Over head Line works Cluster 1 ~ CLS001 ~ Cluster1 OHL" value="ABO101597" />
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