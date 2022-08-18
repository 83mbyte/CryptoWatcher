import React from 'react';
import { View, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { iconStyle } from '../../common/defaults';
import { toggleSex } from '../../redux/reducers/userDataSlice';

const UserSexCheckBox = ({ sex }) => {
    const dispatch = useDispatch();

    const toggleCheckBox = () => {
        dispatch(toggleSex())

    }

    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '40%' }}>
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }} >
                    <Ionicons name="man-outline" size={iconStyle.iconSize} color={iconStyle.iconColor} />
                    <Checkbox style={styles.checkbox} color={iconStyle.iconColor} value={sex == 'male'} onValueChange={() => toggleCheckBox()} />
                </View>
                <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }} >
                    <Ionicons name="woman-outline" size={iconStyle.iconSize} color={iconStyle.iconColor} />
                    <Checkbox style={styles.checkbox} color={iconStyle.iconColor} value={sex == 'female'} onValueChange={() => toggleCheckBox()} />
                </View>

            </View>
        </View>
    );
};

export default UserSexCheckBox;

const styles = StyleSheet.create({
    checkbox: {
        margin: 5,
        color: 'red',

    },
})