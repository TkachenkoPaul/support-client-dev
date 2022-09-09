import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userRequest } from '../api'

export const fetchUser = createAsyncThunk('user/fetchUser', async (data, { rejectWithValue }) => {
    try {
        const response = await userRequest(data)
        if (response.response?.status === 401) {
            throw Error(response.response.status)
        }
        return await response.data
    } catch (error) {
        return rejectWithValue({ error: error.message })
    }
})
const userSlice = createSlice({
    name: 'user',
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
        setUser(state, action) {
            state.users = action.payload.data
        }
    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
            state.isLoading = true
            state.error = null
            state.data = null
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.data = action.payload.user
            state.isLoading = false
        },
        [fetchUser.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload.error
        }
    }
})
export const { setIsLoaded, setIsLoading, setUser } = userSlice.actions
export default userSlice.reducer
