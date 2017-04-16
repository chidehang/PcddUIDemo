import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, InteractionManager} from 'react-native';
import {PagerDotIndicator, IndicatorViewPager} from 'rn-viewpager';
import More from './More';

const BANNER_IMGS = [
    require('../imgs/banner1.png'),
    require('../imgs/banner2.png'),
    require('../imgs/banner3.png'),
];


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    openSiderBar() {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=> {
            navigator.push({
                name: 'More',
                component: More,
            });
        });
    }
    renderBannerView(banners) {
        const {width, height} = Dimensions.get('window');
        return banners.map((item, i)=>
            <View key={i}><Image style={{width: width, height: width/2}} resizeMode="stretch" source={item}/></View>
        );
    }
    render() {
        const {width, height} = Dimensions.get('window');
        return(
            <View style={styles.rootContainer}>
                <View style={styles.titleBar}>
                    <TouchableOpacity onPress={this.openSiderBar.bind(this)}>
                        <Image style={{width: 22, height: 22}} source={require('../imgs/sidebar_on.png')} />
                    </TouchableOpacity>
                    <Text style={styles.titleText}>游戏大厅</Text>
                    <TouchableOpacity>
                        <Image style={{width: 22, height: 22}} source={require('../imgs/btn_cus_svr.png')} />
                    </TouchableOpacity>
                </View>
                <IndicatorViewPager
                    style={{width: width, height: width/2, padding: 5, borderRadius: 10}}
                    indicator={<PagerDotIndicator pageCount={BANNER_IMGS.length} />}>
                    {this.renderBannerView(BANNER_IMGS)}
                </IndicatorViewPager>
                <View style={{flex: 1, flexDirection: 'row', margin: 5}}>
                    <TouchableOpacity>
                        <Image style={{width: (width-15)/2, height: width-30}} source={require('../imgs/bg_beijing28.png')} resizeMode='contain' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: (width-15)/2, height: width-30, marginLeft: 5}} source={require('../imgs/bg_canada28.png')} resizeMode='contain' />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#393a3f',
    },
    titleText: {
        color: '#fff',
        fontSize: 18,
    },
});