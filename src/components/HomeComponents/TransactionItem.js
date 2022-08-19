import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const TransactionItem = ({ data, currentPrice, icon, name }) => {
    const [txData, setTxData] = React.useState(null);

    const txInfo = () => {
        if (data.tx_input_n < 0 || data.result > 0) {
            return { type: 'received', sign: '+' }
        } else {
            return { type: 'sent', sign: '-' }
        }
    }
    const analyzeData = () => {
        let txPriceUsd = (currentPrice * (data.value / 100000000)).toFixed(2);
        let txValue = data.value / 100000000;
        return { value: txValue, price: txPriceUsd, }
    }

    React.useEffect(() => {
        setTxData(analyzeData())
    }, [data]);

    return (
        <View style={styles.container}>

            <View style={styles.iconContainer}>
                <Image
                    style={styles.crytpoLogo}
                    source={{
                        uri: icon
                    }}
                />
            </View>

            <View style={{ backgroundColor: 'transparent', flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>

                <View style={{ backgroundColor: 'transparent', paddingHorizontal: 3, alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center' }}>

                    <Text style={styles.cryptoName}>{name.slice(0, 1).toUpperCase() + name.slice(1,)}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Text style={{ fontSize: 11 }}>{data.confirmed.slice(0, 10)}</Text>
                        <Text style={{ fontSize: 11 }}> {data.confirmed.slice(11, 16)}</Text>
                    </View>

                </View>

                <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Text style={txInfo().sign === '+' ? greenText : redText}>
                        {txInfo().sign}{txData && Math.abs(txData.value)}
                    </Text>

                    <Text style={styles.txText} >
                        ${txData && txData.price}
                    </Text>
                </View>

            </View>

        </View >
    )
}

export default TransactionItem;


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
    crytpoLogo: { width: 42, height: 42 },
    cryptoName: { color: '#646464', fontWeight: '500', fontSize: 17, marginBottom: 3 },
    txText: { color: '#646464', fontWeight: '500', fontSize: 15, marginBottom: 1 }
})

const greenText = StyleSheet.compose(styles.txText, { color: 'green' })
const redText = StyleSheet.compose(styles.txText, { color: 'red' })