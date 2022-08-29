import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { avatars, mainURL } from '../../common/defaults';
import { getCoinsData } from '../../common/functions';
import SquareBtn from '../Buttons/SquareBtn';

import { refresh } from '../../redux/reducers/coinsDataSlice';

const BalanceBlock = ({ currentBalance, userAvatar }) => {
    const dispatch = useDispatch();
    const refreshData = async () => {

        let respond = await getCoinsData(mainURL);
        if (respond && respond !== 'Error') {
            dispatch(refresh(respond));
        }
    }

    return (
        <View style={styles.accountInfo}>
            <View style={styles.balance}>
                <Text style={styles.balanceText}>${currentBalance}</Text>

                <Text style={styles.balanceTextTitle}>Total Balance</Text>
                <View style={styles.accountBtnsRow}>
                    <SquareBtn icon={'list'} color={'#27456e'} text={'List'} pathTo={'CoinsList'} />
                    <SquareBtn icon={'search-outline'} color={'#27456e'} text={'ATM'} />
                    <SquareBtn icon={'wallet-outline'} color={'#27456e'} text={'Wallet'} />
                    <SquareBtn icon={'md-refresh-outline'} color={'#27456e'} text={'Refresh'} onPressFnc={refreshData} />
                </View>
            </View>
            <View style={styles.avatarBox}>

                <Image source={{ uri: avatars[userAvatar] }} style={styles.avatarImg} />

            </View>
        </View>
    );
};

export default BalanceBlock;

const styles = StyleSheet.create({
    accountInfo: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        backgroundColor: 'transparent',
        // padding: 10
    },
    balance: {
        backgroundColor: 'transparent',
        flex: 2,

    },
    balanceTextTitle: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '300'
    },
    balanceText: {
        color: '#fff',
        fontSize: 35,
        fontWeight: '500'
    },
    avatarBox: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    avatarImg: {
        width: 96,
        height: 96,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        //marginRight: 15,
        borderColor: '#fff',
        borderWidth: 1
    },
    accountBtnsRow: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'stretch',
        marginVertical: 10,
    },
});