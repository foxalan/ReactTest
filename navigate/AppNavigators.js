import {StackNavigator, TabNavigator} from 'react-navigation'
import HomePage from "../page/HomePage"
import Popular from "../page/Popular"
import Page2 from "../page/Page2"
import Page3 from "../page/Page3"
import Ioicons from 'react-native-vector-icons/Ionicons'
import React from "react";
import WelcomePage from '../page/launcher/WelcomePage'

export const AppTabNavigator = TabNavigator({

    Popular: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '最热',
            navigationOptions: {
                title: '最热',
                leftButtonIcon: 'none',
            }
        }
    },
    Page2: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: 'Page2',
            tabBarIcon: ({tintColor, focused}) => (
                <Ioicons
                    name={focused ? 'android-home' : 'android-home-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: 'Page3',
            tabBarIcon: ({tintColor, focused}) => (
                <Ioicons
                    name={focused ? 'android-home' : 'android-home-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
})

export const AppStackNavigator = StackNavigator({

    WelcomePage: {
        screen: WelcomePage
    },
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Popular,
        navigationOptions: ({navigation}) => ({
            title: '${navigation.state.params.name }页面名'
        })

    },
    Page2: {
        screen: Page2,
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = setParams;
            return {
                title: params.title ? params.title : 'this is page3',
            }
        }
    },
    TabBar: {
        screen: AppTabNavigator,
    }

})
