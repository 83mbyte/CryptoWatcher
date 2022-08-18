import React from 'react';
import { View } from 'react-native';

const Paper = ({ children }) => {
    return (
        <View style={
            {
                backgroundColor: '#FFF',
                borderColor: "#efefef",
                borderWidth: 2,
                padding: 10,
                borderRadius: 5,
                flex: 1,
                marginVertical: 5
            }
        }>
            {children}
        </View>
    );
};

export default Paper;