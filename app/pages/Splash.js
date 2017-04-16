import React from 'react';
import {Dimensions, Image, InteractionManager} from 'react-native';
import Main from './Main';

const {width, height} = Dimensions.get('window');

export default class Splash extends React.Component {
    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(()=> {
            InteractionManager.runAfterInteractions(()=> {
                navigator.resetTo({
                    name: 'Main',
                    component: Main,
                });
            });
        }, 800);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return(
            <Image
                style={{flex:1, width:width, height:height}}
                source={require('../imgs/bg_loading.png')}/>
        )
    }
}