import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../auth/authSlice';
import productoReducer from "../productos/productoSlice";
import pedidoReducer from '../pedidos/pedidoSlice';
 
export const store = configureStore({
    reducer: {
        producto: productoReducer,
        auth: authReducer,
        pedido: pedidoReducer
    }
}) 