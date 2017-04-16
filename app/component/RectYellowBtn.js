import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export default class RectYellowBtn extends React.Component {
    static propTypes = {
        ...View.propTypes,
        onPress: React.PropTypes.func,
        text: React.PropTypes.string,
    }
    render() {
        return(
            <TouchableOpacity
                style={styles.btnBg}
                onPress={this.props.onPress}>
                <Text style={styles.btnText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    btnBg: {
        width: 75,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc81f',
        borderRadius: 3,
    },
    btnText: {
        fontSize: 13,
        color: '#824828',
    }
});