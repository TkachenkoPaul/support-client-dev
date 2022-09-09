import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import authSlice from './authSlice'
import storage from 'redux-persist/lib/storage'
import usersSlice from './usersSlice'
import userSlice from './userSlice'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'
import expireReducer from 'redux-persist-expire'

const persistConfig = {
    key: 'auth',
    storage,
    transforms: [
        expireReducer('test', {
            persistedAtKey: '__persisted_at',

            expireSeconds: 20,
            expiredState: { done: 1 },
            autoExpire: false
        })
    ]
}
const persistAuthReducer = persistReducer(persistConfig, authSlice)
const rootReducer = combineReducers({
    auth: persistAuthReducer,
    users: usersSlice,
    user: userSlice
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

export const persist = persistStore(store)
export default store
