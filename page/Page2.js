import React from 'react';
import {StyleSheet, Text, View, Image, AppRegistry, Button,ListView,RefreshControl} from 'react-native';


export default class Page2 extends React.Component {


    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._genRows()),
        };
    }

    onGet(url){
        fetch(url)
    }

    _genRows(){
        const dataBlob = [];
        for(let i = 0 ; i< 20 ; i ++ ){
            dataBlob.push("aa"+i);
        }
        return dataBlob;
    }

    _pressRow(rowID){
        alert("hellow"+rowID);
    }

    //绑定数据
    renderRow(rowData, sectionID, rowID){
        return (
                <View style={styles.row}>
                    <Text style={styles.text}>{"rowData:"+rowData+"   rowId:"+rowID}</Text>

                </View>
        );
    }

    // 分割线
    renderSeparator(sectionID,rowID,adjacentRowHighlighted){
        return <View style={styles.line}/>
    }


    static navigationOptions = {
        title: 'Welcome',
    };

    render() {

        const {navigation} = this.props;

        return (
            <View style={styles.container}>


                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSeparator={this.renderSeparator.bind(this)}
                />
            </View>
        );
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
    },
    text:{
        fontSize:18,
    },
    row:{
        width:800,
        height: 50,
    },
    line:{
        height:1,
        backgroundColor:'black',
    }
});