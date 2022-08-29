import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
//import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { refresh } from '../../redux/reducers/coinsDataSlice';
import { mainURL } from '../../common/defaults';
import { getCoinsData } from '../../common/functions';

const RefreshBtn = () => {
    const dispatch = useDispatch();

    const refreshData = async () => {
        console.log('refreshing data..');
        let respond = await getCoinsData(mainURL);
        if (respond && respond !== 'Error') {
            dispatch(refresh(respond));
        }
    }
    return (
        <TouchableOpacity onPress={refreshData}>
            {/* <Ionicons name="md-refresh-outline" size={24} color="white" /> */}

            <Feather name="refresh-cw" size={24} color="white" />
        </TouchableOpacity>
    );
};

export default RefreshBtn;