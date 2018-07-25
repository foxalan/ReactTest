import React from 'react';
import {StyleSheet, Text, View, Image, AppRegistry, Button} from 'react-native';

export default class Page1 extends React.Component {

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
                <Text>Hello, Welcome to Page1 </Text>
                <Button
                    title="返回HomePage"
                    onPress={()=> navigation.pop()}
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