import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import RadioButtons from 'react-native-radio-buttons';
import RectBlueBtn from '../component/RectBlueBtn';

const onlineOptions = [
    {text: '支付宝支付', icon: require('../imgs/cz_03.png'), type: 0},
    {text: '微信支付', icon: require('../imgs/cz_05.png'), type: 1},
];
const offlineOptions = [
    {text: '支付宝转账', icon: require('../imgs/cz_03.png'), type: 0},
    {text: '银行转账', icon: require('../imgs/cz_07.png'), type: 1},
];

export default class Recharge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onlineSelectedOpt: {},
            offlineSelectedOpt: {},
        }
    }
    setOnlineSelectedOption(selectedOpt, index) {
        this.setState({
            onlineSelectedOpt: selectedOpt,
        });
    }
    setOfflineSelectedOption(selectedOpt, index) {
        this.setState({
            offlineSelectedOpt: selectedOpt,
        }) ;
    }
    renderOption(opt, isSelected, onSelect, index) {
        let img = isSelected? require('../imgs/cb_check_true.png') : require('../imgs/cb_check_false.png');
        return(
            <TouchableOpacity style={styles.radioButtonContainer} onPress={onSelect} key={index}>
                <Image style={styles.radioButtonIcon} source={opt.icon}/>
                <Text style={styles.radioButtonText}>{opt.text}</Text>
                <View style={{flex: 1}}/>
                <Image style={{width: 15, height: 15}} source={img} resizeMode='contain'/>
            </TouchableOpacity>
        );
    }
    render() {
        return(
            <View style={styles.rootContainer}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>充值</Text>
                </View>
                <Text style={styles.tipText}>线上充值</Text>
                <RadioButtons
                    options={onlineOptions}
                    selectedOption={this.state.onlineSelectedOpt}
                    onSelection={this.setOnlineSelectedOption.bind(this)}
                    renderOption={this.renderOption.bind(this)}/>
                <View style={{padding: 15, backgroundColor: '#fff'}}>
                    <RectBlueBtn text="去充值"/>
                </View>
                <Text style={styles.tipText}>线下充值</Text>
                <RadioButtons
                    options={offlineOptions}
                    selectedOption={this.state.offlineSelectedOpt}
                    onSelection={this.setOfflineSelectedOption.bind(this)}
                    renderOption={this.renderOption.bind(this)}/>
                <View style={{flexDirection: 'row', marginTop: 15, justifyContent: 'space-around'}}>
                    <TouchableOpacity style={styles.borderBtn}>
                        <Text style={{fontSize: 13, color: '#3a84ff',}}>查看转账记录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.borderBtn}>
                        <Text style={{fontSize: 13, color: '#3a84ff',}}>联系客服</Text>
                    </TouchableOpacity>
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
    tipText: {
        color: '#333',
        fontSize: 13,
        margin: 10,
    },
    radioButtonContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#d2d2d2',
    },
    radioButtonIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    radioButtonText: {
        fontSize: 15,
        color: '#333',
    },
    borderBtn: {
        width: 125,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#3a84ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});