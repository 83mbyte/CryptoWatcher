import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';



const SubmitBtn = ({ text, pathTo, ...props }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnArea} onPress={() => props.effects && props.effects()}>
                <Text style={styles.btnText}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SubmitBtn;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#29a47b',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    btnArea: {
        width: '100%',
        marginHorizontal: 5,
        paddingHorizontal: 3,
        alignItems: 'center',
    },
    btnText: { paddingVertical: 15, color: '#FFF', fontSize: 15, fontWeight: '500' }
})