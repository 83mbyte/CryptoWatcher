export const getCoinsData = async (url) => {
    console.log('..getData function run..');
    let respond = await fetching.getCoinsData(url);
    if (respond !== 'Error') {
        return respond;
    } else {
        return 'Error'
    }

}
export const satoshiToBtc = (value) => {
    let satoshi = 1 / 100000000;
    let result = Number(value) * satoshi;
    return parseFloat(result);
}

export const getWalletInfo = async (url, walletId) => {
    let resp = await fetch(`${url}${walletId}`);

    if (resp.status === 200) {
        resp = await resp.json();
        let balance = satoshiToBtc(resp.balance)
        return { balance, tx: resp.txrefs }
    } else {
        return { balance: null, tx: null }
    }

}

const fetching = {
    getCoinsData: async (url) => {
        try {
            let respond = await fetch(url, { method: 'GET', cache: 'no-cache' });
            if (respond.status === 200) {
                let resp = await respond.json()

                let stateObjects = {};
                if (resp) {

                    resp.map((item) => {

                        let coinObj = {
                            [item.id]: {
                                id: item.id,
                                name: item.name,
                                icon: item.image,
                                symbol: item.symbol,
                                current_price: item.current_price,
                                price_change: item.price_change_24h,
                                change_percent: item.price_change_percentage_24h.toFixed(2),
                            }
                        }
                        stateObjects = { ...stateObjects, ...coinObj }
                    });
                }
                return stateObjects;
            } else {
                return 'Error'
            }
        } catch (error) {
            console.log('Got error while fetching.. -- ', error)
        }
    },
}