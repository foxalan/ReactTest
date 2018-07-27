import React, {Component} from 'react'
import WelcomePage from './WelcomePage'


import {AppStackNavigator} from 'navigate/AppNavigators'

function setup() {
    //在这里可以进行一些初始化配置
    return AppStackNavigator;
}

// function setup() {
//     //进行一些初始化配置
//
//     class Root extends Component {
//
//         render() {
//             const {navigation} = this.props;
//             return (navigation.navigate('WelcomePage'))
//         }
//     }
//     return <Root/>;
// }
module.exports = setup;