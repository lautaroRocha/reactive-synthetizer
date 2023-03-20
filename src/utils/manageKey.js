import * as Tone from 'tone'
import KEYS_MAP from './keysMap'

export default function manageKey(synth, time){
    window.addEventListener("keydown", (e) => {
    if(Object.keys(KEYS_MAP).includes(e.key.toUpperCase())){
      if(e.repeat){return}
      synth && synth.triggerAttack(KEYS_MAP[e.key.toUpperCase()], time + 0.01)
      document.querySelectorAll('.key').forEach((key)=>{
        if(key.textContent === e.key.toUpperCase()){
          key.classList.add('playing')
        }
      })
      window.addEventListener('keyup', (e)=>{ 
      synth && synth.triggerRelease(Tone.now() + 0.01)
      document.querySelectorAll('.key').forEach((key)=>{
        if(key.textContent === e.key.toUpperCase()){
          key.classList.remove('playing')
        }
      })
    })
    }
  });
}

export const manageClickKey = (e,synth, time) => {
  const key = e.target.textContent.toUpperCase()
    if(Object.keys(KEYS_MAP).includes(key.toUpperCase())){
      if(e.repeat){return}
      synth && synth.triggerAttack(KEYS_MAP[key], time + 0.01)
          e.target.classList.add('playing')
        }
      window.addEventListener('mouseup', (e)=>{ 
      synth && synth.triggerRelease(Tone.now() + 0.01)
          e.target.classList.remove('playing')
      })
    }