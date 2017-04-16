import React from 'react';
import {Navigator, View, BackAndroid, StatusBar} from 'react-native';
import {NaviGoBack} from './utils/CommonUtil';
import Splash from './pages/Splash';

let _navigator;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }
    goBack() {
        return NaviGoBack(_navigator);
    }
    renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        return(
            <Component {...route.params} navigator={navigator} route={route}/>
        );
    }
    render() {
        return(
            <View style={{flex: 1}}>
                <StatusBar
                    backgroundColor='#393a3f'
                    animated={true}/>
                <Navigator
                    ref="navigator"
                    style={{flex: 1}}
                    initialRoute={{
                        name: 'Splash',
                        component: Splash,
                    }}
                    configureScene={(route, routeStack)=> Navigator.SceneConfigs.PushFromRight}
                    renderScene={this.renderScene.bind(this)}/>
            </View>
        )
    }
}