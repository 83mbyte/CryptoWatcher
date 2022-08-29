import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import CoinsList from '../screens/CoinsList';
import RefreshBtn from '../components/Buttons/RefreshBtn';

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
                <Stack.Screen name="CoinsList" component={CoinsList} options={{
                    headerTitle: "Coins Market Prices",
                    headerRight: () => (
                        <RefreshBtn />
                    )
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;