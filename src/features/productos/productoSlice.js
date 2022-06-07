import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productoService from "./productoService";



const initialState = {
    productos: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    msg: ''
}


export const crearProductos = createAsyncThunk('crear/producto', async (productoData, thunkAPI) => {

    try {
        const token = thunkAPI.getState().auth.user.token
        return await productoService.postProducto(productoData, token)


    } catch (error) {

        const message = (error.response
            && error.response.data
            && error.response.data.message) || error.message
            || error.toString()
        return thunkAPI.rejectWithValue(message);

    }

})

export const obtenerProductos = createAsyncThunk('ver/producto', async (thunkAPI) => {
    try {
        return await productoService.getProductos();
    } catch (error) {
        const message = (error.response
            && error.response.data
            && error.response.data.message) || error.message 
            || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})

export const modificarProducto = createAsyncThunk('modificar/prodcuto', async (dataModificada,id,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;

        return await productoService.putProducto(dataModificada,id ,token);

    } catch (error) {
        const message = (error.response
            && error.response.data
            && error.response.data.message) || error.message
            || error.toString()
        return thunkAPI.rejectWithValue(message)

    }

})

export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.msg = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(crearProductos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(crearProductos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productos.push(action.payload) //se puede hacer el push porque es redux-toolkit, el cual permiete 'mutar' el estado
            })
            .addCase(crearProductos.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(obtenerProductos.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(obtenerProductos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.productos = action.payload;
            })
            .addCase(obtenerProductos.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.msg = action.payload;
            })
            .addCase(modificarProducto.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(modificarProducto.fulfilled, (state,action)=>{
                state.isLoading = false;
                state.isSuccess = true;
                state.productos.push(action.payload);
            })
            .addCase(modificarProducto.rejected, (state,action)=>{
                state.isLoading = false
                state.isError = true;
                state.msg = action.payload;
            })
    }

})


export const { reset } = productoSlice.actions;

export default productoSlice.reducer;