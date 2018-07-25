import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
}from 'react-native'

class Main extends Component{


    static navigationOptions= ({navigation,screenProps})=>({
        headerTitle:'我是主页面',
        headerBackTitle:null,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,

    });

    render(){

        return (
            <View style={styles.container}>
                <TouchableOpacity style={style.button} activeOpacity={0.5} onPress={()=>{
                    this.props.navigation.navigate('Detail',{key:'传递的标题'})
                }} >
                    <Text style={{color:'white'}}>带参数 跳转至Details页面</Text>
                </TouchableOpacity>

                <Text style={{marginTop: 10,color:'black'}}>当前是Main页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'red',

    },
    button:{
        widget: 240,
        height:45,
        borderRadius:5,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },
    headerStyle: {
        backgroundColor:'#4398ff'
    },
    headerTitleStyle:{
        color:'white',
        fontSize:18,
        alignSelf: 'center'
    }
})

module.exports=Main;