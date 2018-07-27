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
            <View style={styles.container}>
                <Text>Welcome</Text>
            </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    tips: {
        fontSize: 29
    }
})
