import {StackNavigator} from 'react-navigation'
import HomePage from "../page/HomePage"
import Page1 from "../page/Page1"
import Page2 from "../page/Page2"

export const AppStackNavigator = StackNavigator({
    HomePage:{
        screen:HomePage
    },
    Page1:{
        screen:Page1,
        navigationOptions:{
            header:null,
        }
    },
    Page2:{
        screen:Page2,
    }
})
