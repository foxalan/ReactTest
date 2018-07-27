/**
 * Created by penn on 2016/12/21.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import BaseComponent from "./BaseComponent";


export default class PopularPage extends BaseComponent {
    constructor(props) {
        super(props);

        this.state = {
            languages: [],
            theme: this.props.theme,
            customThemeViewVisible: false,
        }
    }

    render() {

        return <View>
            <Text>PopularPage</Text>
        </View>
    }
}

