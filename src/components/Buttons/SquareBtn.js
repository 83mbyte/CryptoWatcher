import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const SquareBtn = ({ icon, color, pathTo, text, onPressFnc }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnArea} onPress={
                () =>
                    pathTo
                        ? navigation.navigate(pathTo)
                        : onPressFnc
                            ? onPressFnc()
                            : alert('under construction..')}
            >
                <Ionicons name={icon} size={24} color={color} />
                <Text style={styles.btnText(color)}>{text}</Text>
            </TouchableOpacity>
        </View >
    );
};

export default SquareBtn;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9999FF',
        borderRadius: 5,
        padding: 2,
        marginRight: 5
    },
    btnArea: {
        //marginHorizontal: 5,
        width: 50,
        borderRadius: 5,
        backgroundColor: '#dee0e3',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnText: (color) => ({
        color: color,
        fontSize: 10

    })
})