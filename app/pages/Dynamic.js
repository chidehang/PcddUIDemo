import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import NoticeList2 from './NoticeList2';

export default class Dynamic extends React.Component {
    render() {
        return(
            <View style={styles.rootContainer}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>动态</Text>
                </View>
                <TabView
                    tabBarUnderlineColor="#f00"
                    tabBarBackgroundColor="#fff"
                    tabBarActivTextColor="#f00"
                    tabBarInactiveTextColor="#999"
                    tabBarTextStyle={{fontSize: 15}}>
                    <NoticeList2 {...this.props} tabLabel="通知公告"/>
                    <NoticeList2 {...this.props} tabLabel="我的消息"/>
                </TabView>
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