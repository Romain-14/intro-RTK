import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.slice.js";

const store = configureStore({
    reducer: {
        counter: counterReducer,        
    },
});

export { store };
