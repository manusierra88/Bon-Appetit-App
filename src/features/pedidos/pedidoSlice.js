import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import pedidoService from "./pedidoService"


const initialState = {
    pedidos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    pedido: {}
}

export const crearPedido = createAsyncThunk('crear/pedido',
    async (pedidoData, thunkAPI) => {
        try {
            return await pedidoService.crearPedido(pedidoData);
        } catch (error) {
            if(error){
              return  thunkAPI.rejectWithValue(error);
            }
        }
    })



export const pedidoSlice = createSlice({
    name: 'pedidos',
    initialState,
    reducers: {
        reset: state => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(crearPedido.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(crearPedido.fulfilled, (state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.pedidos.push(action.payload);
            })
            .addCase(crearPedido.rejected, (state, action)=>{
                state.isError = true;
                state.message = action.payload;
            })
     }

})


export const { reset } = pedidoSlice.actions;

export default pedidoSlice.reducer;