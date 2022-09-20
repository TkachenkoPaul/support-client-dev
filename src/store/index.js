import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import expireReducer from 'redux-persist-expire'
import feesSlice from './feesSlice'
import storage from 'redux-persist/lib/storage'
import userSlice from './userSlice'
import usersSlice from './usersSlice'

const persistConfig = {
  key: 'auth',
  storage,
  throttle: 500,
  version: 1,
  transforms: [
    expireReducer('auth', {
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
  user: userSlice,
  fees: feesSlice
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
