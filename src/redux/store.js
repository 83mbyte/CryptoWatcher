import { configureStore } from "@reduxjs/toolkit";
import coinsDataSlice from "./reducers/coinsDataSlice";
import userDataSlice from "./reducers/userDataSlice";

export default configureStore({
    reducer: {
        coinsData: coinsDataSlice,
        userData: userDataSlice
    }
})