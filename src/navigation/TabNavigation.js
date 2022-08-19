import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();

const TabScreenOptions = ({ route }) => ({

    tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'List') {
            iconName = focused
                ? 'list'
                : 'list';
        } else if (route.name === 'Followed') {
            iconName = focused ? 'star' : 'star';

        } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
        } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
        }

        // You can return any component that you like here!
        return <FontAwesome name={iconName} size={28} color={color} />
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,

})


const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={TabScreenOptions} initialRouteName={HomeScreen}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile"
                component={ProfileScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#1c3b8b',
                        shadowColor: 'transparent'
                    },
                    headerTitle: 'Profile'
                }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;