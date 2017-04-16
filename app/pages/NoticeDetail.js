import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NaviGoBack} from '../utils/CommonUtil';

export default class NoticeDetail extends React.Component {
    goBack() {
        const {navigator} = this.props;
        return NaviGoBack(navigator);
    }
    render() {
        return(
            <View style={styles.rootContainer}>
                <View style={styles.titleBar}>
                    <TouchableOpacity style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}} onPress={this.goBack.bind(this)}>
                        <Image style={{width: 20, height: 20}} resizeMode='contain' source={require('../imgs/arrow_left.png')}/>
                    </TouchableOpacity>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.titleText}>通知详情</Text>
                    </View>
                </View>
                <View style={{padding: 10, margin: 10, backgroundColor: '#fff'}}>
                    <Text style={styles.noticeTitle}>{this.props.title}</Text>
                    <Text style={styles.noticeDate}>{this.props.date}</Text>
                    <View style={{height: StyleSheet.hairlineWidth, backgroundColor: '#ebebeb', marginTop: 8}}/>
                    <Text style={styles.noticeContent}>{this.props.content}</Text>
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
        alignItems: 'center',
        backgroundColor: '#393a3f',
        flexDirection: 'row',
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: -40,
    },
    noticeTitle: {
        fontSize: 15,
        color: '#333',
    },
    noticeDate: {
        fontSize: 13,
        color: '#999',
        marginTop: 6,
    },
    noticeContent: {
        fontSize: 13,
        color: '#333',
        marginTop: 8,
    },
});