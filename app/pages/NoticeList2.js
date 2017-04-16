import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, InteractionManager, ListView, RefreshControl} from 'react-native';
import NoticeDetail from './NoticeDetail';
import {connect} from 'react-redux';
import {loadNoticeList} from '../action/LoadNoticeAction';

class NoticeList2 extends React.Component {
    componentDidMount() {
        this.props.dispatch(loadNoticeList());
    }
    renderRowView(rowData, sectionID, rowID) {
        return(
            <TouchableOpacity key={rowID} onPress={this.toNoticeDetail.bind(this, rowData)}>
                <View style={styles.rowContainer}>
                    <Text style={{flex: 1, fontSize: 15, color: '#333'}}>{rowData.title}</Text>
                    <Text style={{fontSize: 11, color: '#999', marginLeft: 10}}>{rowData.releaseYear}</Text>
                </View>
            </TouchableOpacity>
        )
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
        if(this.props.loading === 3) {
            return (
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    onPress={()=> this.props.dispatch(loadNoticeList())}>
                    <Text style={{fontSize: 18}}>数据加载失败，请点击重试</Text>
                </TouchableOpacity>
            );
        } else {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1!==r2});
            return (
                <ListView
                    dataSource={ds.cloneWithRows([...this.props.data])}
                    enableEmptySections={true}
                    renderRow={(rowData, sectionID, rowID)=> {
                        return(
                            <TouchableOpacity key={rowID} onPress={this.toNoticeDetail.bind(this, rowData)}>
                                <View style={styles.rowContainer}>
                                    <Text style={{flex: 1, fontSize: 15, color: '#333'}}>{rowData.title}</Text>
                                    <Text style={{fontSize: 11, color: '#999', marginLeft: 10}}>{rowData.releaseYear}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    renderSeparator={(sectionID, rowID)=> <View key={rowID} style={{height: 1, backgroundColor: '#ebebeb'}}/>}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.loading !== 2}
                            onRefresh={()=> {
                                this.props.dispatch(loadNoticeList());
                            }}
                            colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}/>
                    }/>
            );
        }
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

function mapStateToProps(store) {
    return(
        store.loadNotice
    )
}
export default connect(mapStateToProps)(NoticeList2);