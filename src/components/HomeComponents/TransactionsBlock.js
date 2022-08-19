import React from 'react';
import { StyleSheet, View } from 'react-native';

import PaddingWrapper from '../../wrappers/PaddingWrapper';
import SectionHeader from '../SectionHeader/SectionHeader';
import WhiteCornerSeparator from '../Separators/WhiteCornerSeparator';
import TransactionItem from './TransactionItem';

const TransactionsBlock = ({ coin, transactions }) => {
    return (
        <>

            <WhiteCornerSeparator direction={'top'} />
            <View style={styles.whiteArea}>
                <PaddingWrapper>
                    <SectionHeader text={'Recent Transactions (btc)'} />

                    {
                        transactions.map((item, index) => {
                            if (index < 10 && coin) {

                                return <TransactionItem
                                    key={index}
                                    data={item}
                                    currentPrice={coin && coin.current_price}
                                    icon={coin.icon}
                                    name={coin.name} />
                            }
                        })
                    }
                </PaddingWrapper>
            </View>
            <WhiteCornerSeparator direction={'bottom'} />
        </>
    );
};

export default TransactionsBlock;

const styles = StyleSheet.create({
    whiteArea: {
        backgroundColor: '#FFF',
        //paddingHorizontal: 10
    }
})