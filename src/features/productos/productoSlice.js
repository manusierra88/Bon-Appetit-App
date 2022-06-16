import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productoService from "./productoService";



const initialState = {
    productos: [],
    producto: {},
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

export const obtenerProdcutoPorId = createAsyncThunk('producto/id', async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;

        return await productoService.getById(id, token);


    } catch (error) {

        const message = (error.response
            && error.response.data
            && error.response.data.message) || error.message
            || error.toString()
        return thunkAPI.rejectWithValue(message)



    }
})

export const borrarProducto = createAsyncThunk('borrar/producto', async (id, thunkAPI)=>{
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productoService.deletItem(id,token)
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.data);
    }
})



export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        reset: (state) => initialState

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
            .addCase(obtenerProdcutoPorId.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(obtenerProdcutoPorId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.producto = action.payload;
            })
            .addCase(obtenerProdcutoPorId.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true;
                state.msg = action.payload;
            })
            .addCase(borrarProducto.fulfilled, (state,action)=>{
                state.productos = state.productos.filter(
                    producto=> producto.id !== action.payload.id)
            })
    }

})


export const { reset } = productoSlice.actions;

export default productoSlice.reducer;