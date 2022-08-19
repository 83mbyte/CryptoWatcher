import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='CryptoWatcher' screenOptions={{
                headerStyle: {
                    backgroundColor: '#1c3b8b',
                },
                headerTintColor: 'white',
                headerShadowVisible: false,

            }} >
                <Stack.Screen name="CryptoWatcher" component={TabNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;