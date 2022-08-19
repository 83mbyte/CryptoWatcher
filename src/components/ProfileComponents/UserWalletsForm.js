import React, { Fragment } from 'react';
import { View, Image, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ExpandablePaper from '../../wrappers/ExpandablePaper';

import { updateWallets } from '../../redux/reducers/userDataSlice';
import GreySeparator from '../Separators/GreySeparator';
import SubmitBtn from '../Buttons/SubmitBtn';

const UserWalletsForm = ({ wallets }) => {
    const dispatch = useDispatch();
    const walletIcons = useSelector((state) => state.coinsData.icons ? state.coinsData.icons : null);
    const [editedInfo, setEditedInfo] = React.useState(null);

    const inputHandler = (obj) => {
        setEditedInfo({ ...editedInfo, ...obj });
    }

    const updateForm = () => {

        Object.keys(editedInfo).map((item) => {
            dispatch(updateWallets({ cryptoName: item, data: editedInfo[item] }));

            // below is a validation with 'Wallet-Validator' npm module ///  need to be installed & checked for errors..

            // if (validate(editedInfo[item], item)) {
            //     dispatch(updateWallets({ cryptoName: item, data: editedInfo[item] }));
            // } else {
            //     alert('not valid address')
            // }
        })
        setEditedInfo(null);
    }

    return (
        <ExpandablePaper title={"Wallets"}>
            {
                !wallets && !walletIcons
                    ? <ActivityIndicator />
                    : Object.keys(wallets).map((item, index) => {

                        return (
                            <Fragment key={index}>
                                <View style={styles.container}>
                                    <View style={styles.inputIcon}>
                                        <Image style={{ width: 24, height: 24, backgroundColor: 'transparent', }}
                                            source={{ uri: walletIcons[item] }}

                                        />
                                    </View>

                                    <View style={{ width: '100%', backgroundColor: 'transparent' }}>
                                        <TextInput
                                            style={styles.inputText}
                                            placeholder='wallet ID..'
                                            defaultValue={wallets[item]}
                                            onChangeText={(text) => inputHandler({ [item]: text })}
                                        />
                                    </View>

                                </View>
                                <GreySeparator />
                            </Fragment>
                        )
                    })
            }
            {
                editedInfo && <SubmitBtn text='update' effects={updateForm} />
            }
        </ExpandablePaper>
    )
}

export default UserWalletsForm;

const styles = StyleSheet.create({
    container: { backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', overflow: 'hidden', },
    inputIcon: {
        width: 24,
        alignItems: 'center'
    },
    inputText: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        //backgroundColor: 'red',
        marginHorizontal: 1,
        //width: '100%'
    }
})