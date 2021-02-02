import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Home = ({ navigation }) => {


    return (
        <View>
            <Text>Screen B</Text>
            <Text>ID: {JSON.stringify(navigation.getParam('itemID'))}</Text>
            <Text>Param: {JSON.stringify(navigation.getParam('otherParams'))}</Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}></Button>

        </View>
    )
}

export default Home;