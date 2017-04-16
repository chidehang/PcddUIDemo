import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import FuncModuleLayout from '../component/FuncModuleLayout';

export default class Mine extends React.Component {
    render() {
        return(
            <View style={styles.rootContainer}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>充值</Text>
                </View>
                <TouchableOpacity>
                    <View style={{height: 100, alignItems: 'center', flexDirection: 'row', backgroundColor: '#3a84ff'}}>
                        <Image style={{width: 60, height: 60, marginLeft: 20}}
                            resizeMode='contain'
                            source={require('../imgs/bg_avatar.png')}/>
                        <View style={{flex: 1, marginLeft: 15}}>
                            <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>游客1024</Text>
                            <Text style={{fontSize: 11, color: '#fff', fontWeight: 'bold', marginTop: 10}}>这是我的个性签名</Text>
                        </View>
                        <Image style={{width: 15,  height: 15, marginRight: 10}} resizeMode='contain' source={require('../imgs/arrow_right_white.png')}/>
                    </View>
                </TouchableOpacity>
                <View style={{paddingLeft: 10, paddingRight: 10}}>
                    <FuncModuleLayout text="礼物兑换" icon={require('../imgs/wode_34.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="钱包" icon={require('../imgs/wode_44.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="我的回水" icon={require('../imgs/wode_56.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="帐变记录" icon={require('../imgs/wode_69.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="游戏记录" icon={require('../imgs/wode_76.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="我要分享" icon={require('../imgs/wode_83.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="设置" icon={require('../imgs/wode_72.png')} style={{marginTop: 7}}/>
                    <FuncModuleLayout text="关于" icon={require('../imgs/wode_79.png')} style={{marginTop: 7}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#ebebeb',
    },
    titleBar: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393a3f',
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
    },
});