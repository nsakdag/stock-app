import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
  firms: [],
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    // getFirmsSuccess: (state, { payload }) => {
    //   state.firms = payload
    //   state.loading = false
    // },
    // getSalesSuccess: (state, { payload }) => {
    //   state.sales = payload
    //   state.loading = false
    // },
    // getStockSuccess: (state, { payload: { url, apiData } }) => {
    //   state[url] = apiData
    //   state.loading = false
    // },
    getStockSuccess: (state, action) => {
      state[action.payload.url] = action.payload.apiData
      state.loading = false
    },

    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetchStart, getStockSuccess, fetchFail } = stockSlice.actions

export default stockSlice.reducer
