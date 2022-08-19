import React from 'react';
import { View, StyleSheet } from 'react-native';

const WhiteCornerSeparator = ({ direction, children }) => {

    return (
        <View style={direction == 'top' ? styles.container_Top : styles.container_Bottom}>
            {children}
        </View >
    );
};


export default WhiteCornerSeparator;

const styles = StyleSheet.create({

    container_Bottom: {
        backgroundColor: '#FFF',
        height: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    container_Top: {
        backgroundColor: '#FFF',
        height: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    }

})