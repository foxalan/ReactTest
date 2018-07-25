import React from 'react';
import {StyleSheet, Text, View, Image, AppRegistry, Button} from 'react-native';


export default class HomePage extends React.Component {


    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>
                <Text>Hello, Home page App!</Text>
                <Button
                    onPress={() => navigation.navigate('Page1', {name: '动态的'})}
                    title="go to page1"
                />

                <Button
                    onPress={() => navigation.navigate('Page2')}
                    title="go to page2"
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red',
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    image: {
        height: 22,
        width: 22,
    }
});