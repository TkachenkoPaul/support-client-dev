import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../api'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (data, { rejectWithValue }) => {
  try {
    const response = await getUsers({ ...data })
    if (response.response?.status === 401) {
      throw Error(response.response.status)
    }
    return await response.data
  } catch (error) {
    return rejectWithValue({ error: error.message })
  }
})
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    sort: {
      field: 'users.uid',
      order: 'descend'
    },
    pagination: {
      currentPage: 1,
      perPage: 10,
      total: null
    },
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
    },
    setPagination(state, action) {
      state.pagination.currentPage = action.payload.current
      state.pagination.perPage = action.payload.pageSize
    },
    setSorter(state, action) {
      state.sort = action.payload
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true
      state.error = null
      state.data = null
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.data = action.payload.data
      state.pagination.total = action.payload.meta.total
      state.pagination.currentPage = action.payload.meta.current_page
      state.pagination.from = action.payload.meta.from
      state.pagination.to = action.payload.meta.to
      state.isLoading = false
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload.error
    }
  }
})
export const { setIsLoaded, setIsLoading, setUsers, setPagination, setSorter } = usersSlice.actions
export default usersSlice.reducer
