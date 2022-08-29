import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import { avatars } from '../common/defaults';

import PaddingWrapper from '../wrappers/PaddingWrapper';
import UserProfileForm from '../components/ProfileComponents/UserProfileForm';
import UserWalletsForm from '../components/ProfileComponents/UserWalletsForm';

const ProfileScreen = () => {
    const user = useSelector((state) => state.userData ? state.userData : null)
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}
            style={{ flex: 1 }}
        >
            <ScrollView style={styles.container}>

                <PaddingWrapper>

                    <View style={{ alignItems: 'center', }}>
                        <TouchableOpacity onPress={() => alert("Hi Mate! I'm CryptoWatcher app")}>
                            <Image
                                source={{ uri: user.profile.sex === 'male' ? avatars.male : avatars.female }}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 10, alignItems: 'center' }}>
                        <Text style={styles.userName}>{user.profile.name}</Text>
                        <Text style={styles.userLocation}>{user.profile.address}</Text>
                    </View>

                    {/* various forms below */}
                    <UserProfileForm user={user.profile} />

                    <UserWalletsForm wallets={user.wallets} />

                </PaddingWrapper>
            </ScrollView >
        </KeyboardAvoidingView>

    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CFCFCF',

    },
    avatar: {
        width: 144,
        height: 144,
        backgroundColor: 'lightgray',
        borderRadius: 25,
        //marginRight: 15,
        borderColor: '#fff',
        borderWidth: 3
    },
    userName: { fontSize: 25, color: '#646464', fontWeight: '600', marginBottom: 10 },
    userLocation: {
        fontSize: 20, color: '#787878', fontWeight: '300'
    },

})