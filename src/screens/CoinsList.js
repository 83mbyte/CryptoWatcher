import React from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import CoinsListItem from '../components/CoinsListComponents/CoinsListItem';
import PaddingWrapper from '../wrappers/PaddingWrapper';

const CoinsList = () => {
    const allCoins = useSelector(state => state.coinsData.coins ? state.coinsData.coins : null);
    return (
        <ScrollView maximumZoomScale={1.5}>
            <PaddingWrapper>
                {
                    !allCoins
                        ? <ActivityIndicator size='small' />
                        : Object.keys(allCoins).map((item, index) => {
                            return <CoinsListItem key={index} item={allCoins[item]} />
                        })
                }
            </PaddingWrapper>

        </ScrollView>
    );
};

export default CoinsList;