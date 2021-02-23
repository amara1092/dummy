import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';

export default function Head({ navigation, title }){

const openmenu = () => {
navigation.openDrawer();
}

    return(
    <View style={styles.head}>
            <MaterialIcons name='menu' size={30} onPress={openmenu} style={styles.icon} />
        <View>
                <Text style={styles.headText}>{title}</Text>
        

        </View>

 </View>



    )
}

const styles = StyleSheet.create({
head: {
padding:2,
marginLeft:-20,
marginTop:-1,
width: '120%',
height:'160%',
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#09253a',
},

headText: {
fontWeight: 'bold',
fontSize: 20,
color: 'whitesmoke',
letterSpacing: 1,

},

icon:{
position:'absolute',
color:'white',
 left: 16
}

});
