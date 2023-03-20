
import { configureStore } from '@reduxjs/toolkit'
import analyserSlice from './analyserSlice'
import envelopeSlice from './envelopeSlice'
import synthSlice from './synthSlice'


export const store = configureStore({
  reducer: {
    synth : synthSlice,
    envelope : envelopeSlice,
    analyser : analyserSlice
  },
})