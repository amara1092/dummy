import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const CheckBoxComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.check}>
          <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
              setChecked(!checked);
            }}
          />
           <Text style={styles.text}>Same lunch for the week?</Text>
      </View>
      </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }, 

    check: {
      alignSelf: "center",
      marginTop:-258,
      marginLeft:-30
    },

    text: {
      marginTop:-28,
      marginLeft:40
    }
  });
