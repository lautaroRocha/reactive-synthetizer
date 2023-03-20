import { createSlice } from '@reduxjs/toolkit'

const DEFAULT_VALUES = {osc: 'sine', vol:-10, synth: null}

const initialState = DEFAULT_VALUES

export const synthSlice = createSlice({
  name: 'synth',
  initialState,
  reducers: {
    setOsc: (state, action) => {
      state.osc = action.payload
    },
    setVol:(state, action) => {
        state.vol = action.payload
    },
    setSynth: (state, action) => {
        state.synth = action.payload
    }}})

export const { setOsc, setVol, setSynth } = synthSlice.actions

export default synthSlice.reducer