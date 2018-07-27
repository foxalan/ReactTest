
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View>
                <Text>Weclome to may </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})
