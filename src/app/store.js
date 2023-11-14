import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "../features/temperatures/temperatureSlice";

export default configureStore({
    reducer:{
        temperature: temperatureReducer,
    }
});