import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        users: null
    }
})
