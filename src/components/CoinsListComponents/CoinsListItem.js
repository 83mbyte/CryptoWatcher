import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native';
import ArrowPrice from '../Arrow/ArrowPrice';

const CoinsListItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    style={styles.cryptoLogo}
                    source={{
                        uri: item.icon,
                    }}
                />
            </View>
            <View style={styles.namePriceStarContainer}>
                <View style={styles.namePriceBlock}>
                    <View style={{ backgroundColor: 'transparent', flex: 2, marginHorizontal: 5 }}>
                        <Text style={styles.cryptoName}>{item.name.slice(0, 1).toUpperCase() + item.name.slice(1,)}</Text>
                    </View>
                    <View style={{ backgroundColor: 'transparent', flex: 2, marginHorizontal: 5, alignItems: 'flex-end' }}>
                        <Text style={{ fontWeight: '600', fontSize: 15, color: '#646464' }}>${item.current_price}</Text>
                        <ArrowPrice change_percent={item.change_percent} />
                    </View>
                </View>

                {/* <View style={{ alignItems: 'center' }}>
                    <ArrowPrice change_percent={item.change_percent} />
                </View> */}


            </View>

        </View>
    );
};

export default CoinsListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 1,
        padding: 5,
        marginVertical: 5,
        borderColor: '#FFF',
        borderWidth: 1,
        borderRadius: 12,
        shadowColor: '#d9d9d9',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        alignItems: 'center'
    },

    iconContainer: {
        borderRadius: 5,
        backgroundColor: 'transparent',
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
    cryptoLogo: { width: 42, height: 42 },
    cryptoName: { color: '#646464', fontWeight: '500', fontSize: 17, marginBottom: 3 },
    namePriceStarContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    namePriceBlock: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

})