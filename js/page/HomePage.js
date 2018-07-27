
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator';


export const ACTION_HOME = {
    A_SHOW_TOAST: 'showToast', A_RESTART: 'restart', A_THEME: 'theme',
    A_HOME_TAB_SELECT: 'home_tab_select'
};
export const FLAG_TAB = {
    flag_popularTab: 'tb_popular',
    flag_trendingTab: 'tb_trending',
    flag_favoriteTab: 'tb_favorite',
    flag_my: 'tb_my'
};



export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        let selectedTab = this.params.selectedTab ? this.params.selectedTab : 'tb_popular';
        this.state = {
            selectedTab: selectedTab,
            theme: this.params.theme || ThemeFactory.createTheme(ThemeFlags.Default),
        }
    }


    /**
     * 向CodePush服务器检查更新
     */
    update() {
        codePush.sync({
            updateDialog: {
                appendReleaseDescription: true,
                descriptionPrefix: '更新内容',
                title: '更新',
                mandatoryUpdateMessage: '',
                mandatoryContinueButtonLabel: '更新',
            },
            mandatoryInstallMode: codePush.InstallMode.ON_NEXT_RESTART,
        });
    }

    componentDidMount() {
        super.componentDidMount();
        this.listener = DeviceEventEmitter.addListener('ACTION_HOME',
            (action, params) => this.onAction(action, params));
        // this.update();
    }



    render() {
        return (<View>
            <Text>HomePage</Text>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tips: {
        fontSize: 29
    }
})
