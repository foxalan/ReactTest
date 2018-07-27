import React from 'react'
import {StackNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'


export const AppNavigator = StackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            title:'Welcome',
        }
    },
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            title:'HomePage',
        }
    }


})