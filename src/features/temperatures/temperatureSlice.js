import { createSlice } from "@reduxjs/toolkit";

export const temperatureSlice = createSlice({
    name: "temperature",
    initialState:{
        value: 12,
    },
    reducers:{
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        },
    }
})

export const {increment, decrement,active} = temperatureSlice.actions;

export const temperatureCount = (state) => state.temperature.value


export default temperatureSlice.reducer