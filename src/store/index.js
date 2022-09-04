import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import authSlice from './authSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['isLoading']
}
const persistAuthReducer = persistReducer(persistConfig, authSlice)
const rootReducer = combineReducers({
    auth: persistAuthReducer
})
const store = configureStore({
    reducer: rootReducer
})

export const persistor = persistStore(store)
export default store
