import React, { Fragment } from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';

import { useDispatch } from 'react-redux';
import { updateProfile } from '../../redux/reducers/userDataSlice';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import ExpandablePaper from '../../wrappers/ExpandablePaper';
import GreySeparator from '../Separators/GreySeparator';
import SubmitBtn from '../Buttons/SubmitBtn';
import UserSexCheckBox from './UserSexCheckBox';



const UserProfileForm = ({ user }) => {
    const dispatch = useDispatch();
    const [editedInfo, setEditedInfo] = React.useState(null);
    const formFields = {
        email: {
            icon: 'mail',
            placeholder: 'type your email..',
            keyboardType: 'email-address'
        },
        name: {
            icon: 'user',
            placeholder: 'type your full name..'
        },
        password: {
            icon: 'lock',
            placeholder: 'type your password..',
            secureTextEntry: true
        },
        address: {
            icon: 'ios-location-outline',
            placeholder: 'type your address..',
        }
    }

    const inputHandler = (obj) => {
        setEditedInfo({ ...editedInfo, ...obj });
    }
    const updateForm = () => {
        Object.keys(editedInfo).map((item) => {
            dispatch(updateProfile({ profileField: item, data: editedInfo[item] }));
        })
        setEditedInfo(null);
    }


    return (
        <ExpandablePaper title={'User Profile'}>
            {
                !user
                    ? <ActivityIndicator size='small' />
                    :
                    Object.keys(user).map((item, index) => {
                        if (item !== 'sex') {
                            return (
                                <Fragment key={index}>
                                    <View style={styles.detailsContainer}>
                                        <View style={styles.inputIcon}>

                                            {
                                                item == 'address'
                                                    ? <Ionicons
                                                        name={formFields[item].icon}
                                                        size={18}
                                                        color={'#dedede'}
                                                    />
                                                    : <AntDesign
                                                        name={formFields[item].icon}
                                                        size={18}
                                                        color={'#dedede'}
                                                    />
                                            }
                                        </View>
                                        <View style={{ width: '100%', backgroundColor: 'transparent' }}>
                                            <TextInput
                                                style={styles.inputText}
                                                defaultValue={user ? user[item] : 'unknown..'}
                                                keyboardType={formFields[item].keyboardType && formFields[item].keyboardType}
                                                secureTextEntry={formFields[item].secureTextEntry && formFields[item].secureTextEntry}
                                                onChangeText={(text) => inputHandler({ [item]: text })}
                                            />
                                        </View>
                                    </View>
                                    <GreySeparator />
                                </Fragment>
                            )
                        } else {
                            return <UserSexCheckBox key={index} sex={user[item]} />
                        }

                    })
            }
            {
                editedInfo && <SubmitBtn text="update" effects={updateForm} />
            }
        </ExpandablePaper>
    )
}

export default UserProfileForm;

const styles = StyleSheet.create({
    detailsContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
    },
    inputIcon: {
        width: 24,
        alignItems: 'center'
    },
    inputText: {
        paddingVertical: 10,
        paddingHorizontal: 1,
        //backgroundColor: 'red',
        marginHorizontal: 1,
        //width: '100%'
    }
})