import React from 'react'
import {StackNavigator} from 'react-navigation';
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import PopularPage from '../page/PopularPage'
import FavoritePage from '../page/FavoritePage'
import MyPage from '../page/my/MyPage'


export const AppNavigator = StackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            title: 'Welcome',
        }
    },
    HomePage: {
        screen: HomePage,
    },
    PopularPage: {
        screen: PopularPage,
    },
    FavoritePage: {
        screen: FavoritePage,
    },
    MyPage: {
        screen: MyPage.
    }


})