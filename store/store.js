import { configureStore } from "@reduxjs/toolkit";
//impirt UserReducer

export const store = configureStore({
    reducer: {
        // users: UserReducer
    }
})