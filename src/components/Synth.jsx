import { useEffect, useState } from "react";
import Control from "./Control";
import * as Tone from 'tone'
import Keyboard from "./Keyboard";
import Looper from "./Looper";
import Volume from "./Volume";
import Osciloscope from "./Osciloscope"
import {useDispatch, useSelector } from 'react-redux'

const Synth = () => {

  const dispatch = useDispatch()
  const {atc, dcy, stn, rls} = useSelector((state) => state.envelope)
  const {vol, osc} = useSelector((state)=> state.synth)

  const [ana, setAna] = useState()
  const [synth, setSynth] = useState()

  useEffect(()=>{
      let volume = new Tone.Volume(vol).toDestination()
      let analyser = new Tone.Analyser('waveform', 1024)
      let synthetizer = new Tone.Synth().connect(analyser).connect(volume);
      setAna(analyser)
      setSynth(synthetizer)
      volume.set({ volume: vol })
      return () => {
        synthetizer.disconnect(volume)
        analyser.disconnect()
        volume.dispose()
        // Tone.dispose()
      }
  }, [ vol])


    useEffect(()=>{
      if(synth){
        synth.envelope.attack = atc;
        synth.envelope.decay = dcy;
        synth.envelope.release = rls;
        synth.envelope.sustain = stn
        synth.oscillator.type = osc;  
      }
    }, [atc, dcy, stn, rls, osc])

      

    return(
        <div className="synth">
        <div className="top">
          <Looper/>
          <Volume/>
        </div>
        <div className="bottom">
          <Control/>
          <Osciloscope ana={ana}/>
        </div>
        <Keyboard synth={synth}/>
        </div>
    )
}

export default Synth