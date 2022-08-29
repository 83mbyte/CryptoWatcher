import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const ArrowPrice = ({ change_percent }) => {
    let arrow_direction = change_percent >= 0 ? 'arrow-up' : 'arrow-down';
    return (
        <View style={{ flexDirection: 'row', backgroundColor: 'transparent', flex: 1, alignItems: 'center' }}>

            <FontAwesome5
                name={arrow_direction}
                size={8}
                color={arrow_direction === "arrow-up" ? "green" : "red"}
                style={{ marginTop: 0, marginHorizontal: 2, backgroundColor: 'transparent', alignItems: 'center' }}
            />
            <Text style={{ color: '#646464', fontWeight: '500', fontSize: 10, }}>
                {(change_percent)}%
            </Text>


        </View >
    );
};

export default ArrowPrice;