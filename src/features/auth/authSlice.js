import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user? user : null,
    isError: false,
    isSuccsses: false,
    isLoading: false,
    message: ''
}

export const loginUser = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response
            && error.response.data
            && error.response.data.message) || error.message
            || error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})

export const logOut = createAsyncThunk('logout/user', async()=>{
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ''
        },
    
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccsses = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
                state.user = null;

            })
    }
})


export const { reset } = authSlice.actions;

export default authSlice.reducer;