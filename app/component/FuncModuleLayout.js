import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

export default class DrawableTextLayout extends React.Component {
    static propTypes = {
        ...View.propTypes,
        onPress: React.PropTypes.func,
        text: React.PropTypes.string,
        icon: React.PropTypes.number,
    }
    render() {
        let rootStyle = this.props.style;
        return(
            <TouchableOpacity onPress={this.props.onPress} style={rootStyle}>
                <View style={styles.container}>
                    <Image style={styles.leftIcon} source={this.props.icon}/>
                    <Text style={styles.labelName}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    leftIcon: {
        width: 20,
        height: 20,
    },
    labelName: {
        fontSize: 15,
        color: '#333',
        marginLeft: 10,
    },
});