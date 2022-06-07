import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../auth/authSlice';
import productoReducer from "../productos/productoSlice";
 
export const store = configureStore({
    reducer: {
        producto: productoReducer,
        auth: authReducer
    }
}) 