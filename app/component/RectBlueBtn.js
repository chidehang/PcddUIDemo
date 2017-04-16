import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export default class RectBlueBtn extends React.Component {
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
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3a84ff',
        borderRadius: 3,
    },
    btnText: {
        fontSize: 13,
        color: '#fff',
    }
});