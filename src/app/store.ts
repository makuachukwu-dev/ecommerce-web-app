import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../features/products/productsApi'
import bestsellersReducer from '../features/products/bestsellersSlice'

export const store = configureStore({
  reducer: {
    bestsellers: bestsellersReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
