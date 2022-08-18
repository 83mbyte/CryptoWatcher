import React from 'react';
import { View } from 'react-native';

const PaddingWrapper = ({ children }) => {
    return (

        <View style={{ backgroundColor: 'transparent', padding: 5 }}>
            {children}
        </View>
    )

};

export default PaddingWrapper;