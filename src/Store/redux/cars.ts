import { createSlice } from '@reduxjs/toolkit'
import { Action } from '@remix-run/router'

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        carList: []
    },
    reducers: {
        setCars: (state, action) => {
            state.carList = action.payload
    }
    }
});

export const setCars = carSlice.actions.setCars;
export default carSlice.reducer