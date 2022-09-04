import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import authSlice from './authSlice'
import storage from 'redux-persist/lib/storage'
import usersSlice from './usersSlice'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['isLoading']
}
const persistAuthReducer = persistReducer(persistConfig, authSlice)
const rootReducer = combineReducers({
    auth: persistAuthReducer,
    users: usersSlice
})
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)
export default store
