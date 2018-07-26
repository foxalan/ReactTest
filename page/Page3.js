import React from 'react';
import {StyleSheet, Text, View, Image, AppRegistry, Button, TextInput} from 'react-native';

export default class Page1 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {navigation} = this.props;
        const {state, setParams} = navigation;
        return (
            <View style={styles.container}>
                <Text>Hello, Welcome to Page1 </Text>
                <Button
                    title="返回HomePage"
                    onPress={() => navigation.goBack()}
                />

                <TextInput
                    onChangeText={text => {
                        setParams({title: text});
                     }
                    }
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
    },
    input:{
        height: 44,
        width: 100,
    }
});