import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profile: {
        name: 'Name Surname jr.',
        email: 'emailaddress@example.com',
        address: 'USA, Brooklyn, NY',
        sex: 'male',
    },
    wallets: {
        bitcoin: '3AX1RcxeZP39MzPJVXB8JwP2dk8R2RSLsg',
        ethereum: '0xd8010adcf17c7418a67640a8bfbdb6534b0f48f9',
        litecoin: 'MVAqBHQDCPfKXqRCtaAjUZzYSKryCN87GA'
    }
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateProfile: (state, action) => {
            state.profile[action.payload.profileField] = action.payload.data;
        },
        updateWallets: (state, action) => {
            state.wallets[action.payload.cryptoName] = action.payload.data;
        },
        toggleSex: (state) => {
            state.profile.sex === 'male' ? state.profile.sex = 'female' : state.profile.sex = 'male';
        },
    }
})

export const { updateProfile, toggleSex, updateWallets } = userDataSlice.actions

export default userDataSlice.reducer