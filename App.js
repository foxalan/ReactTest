import React from 'react';
import {StyleSheet, Text, View, Image,AppRegistry} from 'react-native';
import Application from 'Application'


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        }
    }

    render() {

        const {navigate} = this.props.navigation;

        return (

            <View>
                <Text>This is the home screen of the app</Text>
                <Button
                    onPress={()=>navigate('',)}
                >

                </Button>
            </View>

            // <View style={styles.container}>
            //
            //
            //
            //     <Navigator>
            //
            //         initialRoute = {{
            //         component: Boy,
            //      }
            //     }
            //
            //         renderScene = {(route, navigator) => {
            //         let Component = route.component;
            //         return <Component navigator={navigator}{...route.params}/>
            //     }}
            //
            //     </Navigator>
            //
            //     {/*<TabNavigator>*/}
            //     {/*<TabNavigator.Item*/}
            //     {/*selectedTitleStyle={{color:'red'}}*/}
            //     {/*selected={this.state.selectedTab === 'home'}*/}
            //     {/*title="Home"*/}
            //     {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/images/ic_polular.png')}/>}*/}
            //     {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./res/images/images/ic_polular.png')}/>}*/}
            //     {/*onPress={() => this.setState({selectedTab: 'home'})}>*/}
            //     {/*<View style={styles.page1}></View>*/}
            //     {/*</TabNavigator.Item>*/}
            //     {/*<TabNavigator.Item*/}
            //     {/*selectedTitleStyle={{color:'red'}}*/}
            //     {/*selected={this.state.selectedTab === 'profile'}*/}
            //     {/*title="Profile"*/}
            //     {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/images/ic_trending.png')}/>}*/}
            //     {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./res/images/images/ic_trending.png')}/>}*/}
            //     {/*onPress={() => this.setState({selectedTab: 'profile'})}>*/}
            //     {/*<View style={styles.page2}></View>*/}
            //     {/*</TabNavigator.Item>*/}
            //     {/*<TabNavigator.Item*/}
            //     {/*selectedTitleStyle={{color:'red'}}*/}
            //     {/*selected={this.state.selectedTab === 'setting'}*/}
            //     {/*title="Personal"*/}
            //     {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/images/ic_polular.png')}/>}*/}
            //     {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./res/images/images/ic_polular.png')}/>}*/}
            //     {/*onPress={() => this.setState({selectedTab: 'home'})}>*/}
            //     {/*<View style={styles.page1}></View>*/}
            //     {/*</TabNavigator.Item>*/}
            //     {/*<TabNavigator.Item*/}
            //     {/*selectedTitleStyle={{color:'red'}}*/}
            //     {/*selected={this.state.selectedTab === 'my'}*/}
            //     {/*title="MyPersonal"*/}
            //     {/*renderIcon={() => <Image style={styles.image} source={require('./res/images/images/ic_trending.png')}/>}*/}
            //     {/*renderSelectedIcon={() => <Image style={[styles.image,{tintColor:"red"}]} source={require('./res/images/images/ic_trending.png')}/>}*/}
            //     {/*onPress={() => this.setState({selectedTab: 'profile'})}>*/}
            //     {/*<View style={styles.page2}></View>*/}
            //     {/*</TabNavigator.Item>*/}
            //     {/*</TabNavigator>*/}
            //
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // alignItems: 'center',
        // justifyContent: 'center',
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

