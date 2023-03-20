import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_VALUES = {ana : null}

const initialState = DEFAULT_VALUES

export const analyserSlice = createSlice({
  name: 'analyser',
  initialState,
  reducers: {
    setAna: (state, action) => {
      state.ana = action.payload
    }}})

export const { setAna } = analyserSlice.actions

export default analyserSlice.reducer