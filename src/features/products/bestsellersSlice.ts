import { createSlice } from '@reduxjs/toolkit'

const PAGE_SIZE = 10

interface BestsellersState {
  visibleCount: number
}

const initialState: BestsellersState = {
  visibleCount: PAGE_SIZE,
}

const bestsellersSlice = createSlice({
  name: 'bestsellers',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.visibleCount += PAGE_SIZE
    },
    showLess: (state) => {
      state.visibleCount = PAGE_SIZE
    },
  },
})

export const { loadMore, showLess } = bestsellersSlice.actions
export const BESTSELLERS_PAGE_SIZE = PAGE_SIZE
export default bestsellersSlice.reducer
