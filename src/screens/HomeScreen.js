import React from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { walletApiUrl } from '../common/defaults';
import { getWalletInfo } from '../common/functions';

import PaddingWrapper from '../wrappers/PaddingWrapper';
import BalanceBlock from '../components/HomeComponents/BalanceBlock';
import TransactionsBlock from '../components/HomeComponents/TransactionsBlock';

const HomeScreen = () => {
    const [currentBalance, setCurrentBalance] = React.useState(0);
    const [transactions, setTransactions] = React.useState(null);

    const userBTCWallet = useSelector(
        (state) => state.userData.wallets
            ? state.userData.wallets.bitcoin
            : null
    );
    const coinBTCData = useSelector(
        (state) => state.coinsData
            ? state.coinsData.coins.bitcoin
            : null
    );
    const user = useSelector(
        (state) => state.userData ? state.userData.profile : null
    )

    const collectData = async () => {
        const URL = `${walletApiUrl}`;
        if (userBTCWallet) {
            let { balance, tx } = await getWalletInfo(URL, userBTCWallet);
            if (coinBTCData && (balance != null && balance != undefined)) {
                setCurrentBalance((coinBTCData.current_price * balance).toFixed(2))
            }
            if (tx != null && tx.length > 0) {
                setTransactions(tx);
            }
        }
    };

    React.useEffect(() => {
        console.log('..useEfect at HomeScreen.js')
        collectData()
    }, [coinBTCData]);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} bounces={false}>
                <PaddingWrapper>

                    {/* Balance block start */}
                    <BalanceBlock currentBalance={currentBalance} userAvatar={user.sex} />
                    {/* Balance block end */}
                </PaddingWrapper>

                {/* Trx section */}
                {
                    !transactions
                        ? <ActivityIndicator size={'large'} />
                        : <TransactionsBlock coin={coinBTCData} transactions={transactions} />
                }
                {/* Trx section end */}

            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#1c3b8b',
        justifyContent: 'space-between'
    },
    scrollViewContent: {
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0,
    },
})