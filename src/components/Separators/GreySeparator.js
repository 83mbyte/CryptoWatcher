import React from 'react';
import { View, StyleSheet } from 'react-native';

const GreySeparator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.horizLine}></View>
        </View>
    );
};

export default GreySeparator;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 1,
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    horizLine: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'lightgray'
    }
})