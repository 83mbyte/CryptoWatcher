import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coins: [{
        "bitcoin": { "id": "bitcoin", "symbol": "btc", "name": "Bitcoin", "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", "current_price": 23056, "market_cap": 440441656306, "market_cap_rank": 1, "fully_diluted_valuation": 484017979377, "total_volume": 41723428352, "high_24h": 24082, "low_24h": 23010, "price_change_24h": -715.409045910681, "price_change_percentage_24h": -3.00954, "market_cap_change_24h": -14235059692.167053, "market_cap_change_percentage_24h": -3.13081, "circulating_supply": 19109362.0, "total_supply": 21000000.0, "max_supply": 21000000.0, "ath": 69045, "ath_change_percentage": -66.61807, "ath_date": "2021-11-10T14:24:11.849Z", "atl": 67.81, "atl_change_percentage": 33890.28921, "atl_date": "2013-07-06T00:00:00.000Z", "roi": null, "last_updated": "2022-08-01T13:27:55.834Z" }
    }],
    icons: {}
}

export const coinsDataSlice = createSlice({
    name: 'coinsData',
    initialState,
    reducers: {
        initData: (state, action) => {
            console.log('..REDUCER initData')
            Object.keys(action.payload).map((item) => {
                //console.log(action.payload[item])
                state.icons = {
                    ...state.icons,
                    [action.payload[item].id]: action.payload[item].icon
                }
            })
            state.coins = action.payload;
        },
        refresh: (state, action) => {
            console.log('..REDUCER refresh');

            state.coins = action.payload;
        }
    }
})

export const { initData, refresh } = coinsDataSlice.actions;
export default coinsDataSlice.reducer;