import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_VALUES = {atc : 2.5, dcy: 0.5, stn : 0.5, rls : 2.5 }

const initialState = DEFAULT_VALUES

export const envelopeSlice = createSlice({
  name: 'envelope',
  initialState,
  reducers: {
    setAttack: (state, action) => {
      state.atc = action.payload
    },
    setDecay:(state, action) => {
        state.dcy = action.payload
    },
    setSustain: (state, action) => {
        state.stn = action.payload
    },
    setRelease : (state, action) => {
      state.rls  = action.payload
    }
  },
})

export const { setAttack, setRelease, setSustain, setDecay } = envelopeSlice.actions

export default envelopeSlice.reducer