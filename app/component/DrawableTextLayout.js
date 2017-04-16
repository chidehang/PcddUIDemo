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
        return(
            <TouchableOpacity onPress={this.props.onPress}>
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
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#d2d2d2',
    },
    leftIcon: {
        width: 20,
        height: 20,
    },
    labelName: {
        fontSize: 14,
        color: '#333',
        marginLeft: 10,
    },
});