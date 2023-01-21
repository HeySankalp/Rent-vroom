import {configureStore} from '@reduxjs/toolkit'
import carReducer  from './cars'

export const store = configureStore({
    reducer : {
        carReducer : carReducer
    }
});