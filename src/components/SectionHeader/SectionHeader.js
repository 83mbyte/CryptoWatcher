import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SectionHeader = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{text}</Text>
        </View>
    );
};

export default SectionHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
    },
    headerText: {
        color: '#646464',
        fontSize: 20,
        fontWeight: '500',
    }
})