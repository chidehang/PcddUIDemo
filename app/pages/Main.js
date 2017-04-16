import React from 'react';
import {StyleSheet, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';
import Recharge from './Recharge';
import Dynamic from './Dynamic';
import Mine from './Mine';

const TAB_HOME = "home";
const TAB_RECHARGE = "recharge";
const TAB_DYNAMIC = "dynamic";
const TAB_MINE = "mine";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: TAB_HOME,
        }
    }
    render() {
        return(
            <TabNavigator>
                <TabNavigator.Item
                    title="首页"
                    selected={this.state.selectedTab === TAB_HOME}
                    titleStyle={styles.text}
                    selectedTitleStyle={styles.selectedText}
                    renderIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_home_nor.png')}/>}
                    renderSelectedIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_home_sel.png')}/>}
                    onPress={()=> this.setState({selectedTab: TAB_HOME})}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="充值"
                    selected={this.state.selectedTab === TAB_RECHARGE}
                    titleStyle={styles.text}
                    selectedTitleStyle={styles.selectedText}
                    renderIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_recharge_nor.png')}/>}
                    renderSelectedIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_recharge_sel.png')}/>}
                    onPress={()=> this.setState({selectedTab: TAB_RECHARGE})}>
                    <Recharge {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="动态"
                    selected={this.state.selectedTab === TAB_DYNAMIC}
                    titleStyle={styles.text}
                    selectedTitleStyle={styles.selectedText}
                    renderIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_dynamic_nor.png')}/>}
                    renderSelectedIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_dynamic_sel.png')}/>}
                    onPress={()=> this.setState({selectedTab: TAB_DYNAMIC})}>
                    <Dynamic {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selected={this.state.selectedTab === TAB_MINE}
                    titleStyle={styles.text}
                    selectedTitleStyle={styles.selectedText}
                    renderIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_mine_nor.png')}/>}
                    renderSelectedIcon={()=> <Image style={styles.icon} source={require('../imgs/tab_mine_sel.png')}/>}
                    onPress={()=> this.setState({selectedTab: TAB_MINE})}>
                    <Mine {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 23,
        height: 23,
    },
    text: {
        fontSize: 12,
        color: '#999',
    },
    selectedText: {
        fontSize: 12,
        color: '#3a84ff'
    }
});