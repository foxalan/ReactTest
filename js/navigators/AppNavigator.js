import React from 'react'
import {StackNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage'


export const AppNavigator = StackNavigator({
    WelcomePage:{
        screen:WelcomePage,
        navigationOptions:{
            title:'Welcome',
        }
    }


})