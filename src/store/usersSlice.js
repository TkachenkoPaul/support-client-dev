import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authAdminRequest, usersRequest } from '../api'
import { authAdmin } from './authSlice'
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    try {
        const response = await usersRequest()
        return response.data
    } catch (e) {
        return rejectWithValue(e)
    }
})
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        data: null
    },
    reducers: {
        setIsLoading(state) {
            state.isLoading = true
        },
        setIsLoaded(state) {
            state.isLoading = false
        },
        setUsers(state, action) {
            state.users = action.payload.users
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload.data
            state.isLoading = false
        },
        [fetchUsers.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload.response.data
        }
    }
})
export const { setIsLoaded, setIsLoading, setUsers } = usersSlice.actions
export default usersSlice.reducer
