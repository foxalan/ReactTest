import {StackNavigator, TabNavigator} from 'react-navigation'
import HomePage from "../page/HomePage"
import Page1 from "../page/Page1"
import Page2 from "../page/Page2"
import Page3 from "../page/Page3"
import Ioicons from 'react-native-vector-icons/Ionicons'
import React from "react";

export const AppTabNavigator = TabNavigator({

    Page1: {
        screen: Page1,
        navigationOptions:{
            tabBarLabel:'Page1',
            tabBarIcon:({tintColor,focused})=>(
                <Ioicons
                    name={focused?'android-home':'android-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page2: {
        screen: Page1,
        navigationOptions:{
            tabBarLabel:'Page1',
            tabBarIcon:({tintColor,focused})=>(
                <Ioicons
                    name={focused?'android-home':'android-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Page3: {
        screen: Page1,
        navigationOptions:{
            tabBarLabel:'Page1',
            tabBarIcon:({tintColor,focused})=>(
                <Ioicons
                    name={focused?'android-home':'android-home-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },



})

export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
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
    TabBar:{
        screen:AppTabNavigator,
    }

})
