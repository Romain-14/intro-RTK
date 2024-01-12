import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    msg: "Hello World",
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value++;
        },
        decrement: (state) => {
            state.value--;
        },
        reset: (state) => {
            state.value = 0;
        },
    },
});

// on export les actions pour les dispatch quand on en a besoin (interagir avec le store)
export const { increment, decrement, reset } = counterSlice.actions;

// export de la state pour le store, afin de pouvoir s'y abonner
export default counterSlice.reducer;
