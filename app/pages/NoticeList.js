import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, InteractionManager} from 'react-native';
import GiftedListView from 'react-native-gifted-listview';
import NoticeDetail from './NoticeDetail';
import {connect} from 'react-redux';
import {loadNoticeList} from '../action/LoadNoticeAction';

export default class NoticeList extends React.Component {
    onFetch(page=1, callback, options) {
        dispatch(loadNoticeList());

        setTimeout(()=> {
            let data = [
                {title: '通知'+((page-1)*3+1), date: '2016-09-07', content: '爱讲故事的骄傲赶时间的规划说过话大街上的贺卡就上课了的贺卡上'},
                {title: '通知'+((page-1)*3+2), date: '2016-09-08', content: '爱讲故事的骄傲赶时间的规划说过话大街上的贺卡就上课了的贺卡上'},
                {title: '通知'+((page-1)*3+3), date: '2016-09-09', content: '爱讲故事的骄傲赶时间的规划说过话大街上的贺卡就上课了的贺卡上'},
            ];
            if(page == 2) {
                callback(data, {allLoaded: true});
            } else {
                callback(data);
            }
        }, 1000);
    }
    renderRowView(rowData, sectionID, rowID) {
        return(
            <TouchableOpacity key={rowID} onPress={this.toNoticeDetail.bind(this, rowData)}>
                <View style={styles.rowContainer}>
                    <Text style={{flex: 1, fontSize: 15, color: '#333'}}>{rowData.title}</Text>
                    <Text style={{fontSize: 11, color: '#999'}}>{rowData.date}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    renderSeparator(sectionID, rowID) {
        return(
            <View key={rowID} style={{height: 1, backgroundColor: '#ebebeb'}}/>
        )
    }
    toNoticeDetail(rowData) {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=> {
            navigator.push({
                name: 'NoticeDetail',
                component: NoticeDetail,
                params: rowData,
            });
        })
    }
    render() {
        return(
            <GiftedListView
                rowView={this.renderRowView.bind(this)}
                onFetch={this.onFetch.bind(this)}
                firstLoader={true}
                pagination={true}
                refreshable={true}
                refreshableTintColor="#3a84ff"
                renderSeparator={this.renderSeparator.bind(this)}
                customStyles={{
                    paginationView: {backgroundColor: '#ebebeb'},
                    actionsLabel: {fontSize: 14, color: '#3a84ff'},
                }}/>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        alignItems: 'center',
    },
})

function mapStateToProps(state) {
    const {loadNotice} = state;
    return(
        loadNotice
    );
}