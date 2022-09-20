import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAuth } from '../api'

export const authAdmin = createAsyncThunk('auth/authAdmin', async (user, { rejectWithValue }) => {
  try {
    const response = await getAuth(user)
    if (response?.name === 'AxiosError') {
      throw Error(response.message)
    }
    return await response.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    error: null,
    token: null,
    user: []
  },
  reducers: {
    setIsLoading(state) {
      state.isLoading = true
    },
    setIsLoaded(state) {
      state.isLoading = false
    },
    setToken(state, action) {
      state.token = action.payload.data.token
    },
    logout(state) {
      state.token = null
    }
  },
  extraReducers: {
    [authAdmin.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [authAdmin.fulfilled]: (state, action) => {
      state.token = action.payload.authorization.token
      state.user = action.payload.user
      state.isLoading = false
    },
    [authAdmin.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})
export const { setIsLoaded, setIsLoading, setToken, logout } = authSlice.actions

export default authSlice.reducer
