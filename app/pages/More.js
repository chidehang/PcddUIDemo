import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {NaviGoBack} from '../utils/CommonUtil';
import RectYellowBtn from '../component/RectYellowBtn';
import DrawableTextLayout from '../component/DrawableTextLayout';

export default class More extends React.Component {
    closeSiderBar() {
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }
    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <TouchableOpacity onPress={this.closeSiderBar.bind(this)}>
                    <Image style={{width: 22, height: 22, margin: 9}} source={require('../imgs/sidebar_off.png')}/>
                </TouchableOpacity>
                <Image style={{width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#fff', margin: 15, alignSelf: 'center'}}
                       source={require('../imgs/bg_avatar.png')}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                    <RectYellowBtn text="充值"/>
                    <RectYellowBtn text="提现"/>
                </View>
                <View style={{flex: 1, margin: 20}}>
                    <DrawableTextLayout text="余额" icon={require('../imgs/shouye_107.png')} />
                    <DrawableTextLayout text="我的钱包" icon={require('../imgs/shouye_109.png')} />
                    <DrawableTextLayout text="我的消息" icon={require('../imgs/shouye_111.png')} />
                </View>
            </View>
        )
    }
}