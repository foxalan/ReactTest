import React from 'react';
import {StyleSheet, Text, View, Image, AppRegistry, Button,TouchableOpacity} from 'react-native';
import NavigationBar from '../js/common/NavigationBar'
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'


export default class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            languages: [],
            theme:this.props.theme,
            customThemeViewVisible: false,
        }
    }

    renderRightButton() {
        return <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                onPress={()=> {
                    this.props.navigator.push({
                        component:SearchPage,
                        params:{
                            ...this.props
                        }
                    })
                }}
            >
                <View style={{padding:5,marginRight:8}}>
                    <Image
                        style={{width:24,height:24}}
                        source={require('../../res/images/ic_search_white_48pt.png')}
                    />
                </View>

            </TouchableOpacity>
         {/*//   {ViewUtils.getMoreButton(()=>this.refs.moreMenu.open())}*/}
        </View>
    }

    render() {

        const {navigation} = this.props;

        const statusBar={
            backgroundColor: this.state.theme.themeColor,
            barStyle: 'light-content',
        }

        let navigationBar =
            <NavigationBar
                title={'最热'}
                statusBar={statusBar}
                style={this.state.theme.styles.navBar}
                rightButton={this.renderRightButton()}
            />;


        return (<View style={styles.container}>
            {navigationBar}
            {content}
            {this.renderMoreView()}
            {this.renderCustomThemeView()}
        </View>)


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
    }
});