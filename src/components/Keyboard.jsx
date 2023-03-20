import { useEffect } from "react"
import * as Tone from 'tone'
import  KEYS_MAP  from "../utils/keysMap"
import manageKey from "../utils/manageKey"
import { manageClickKey } from "../utils/manageKey"

const Keyboard = ( {synth} ) => {

    useEffect(()=>{
          window.addEventListener("keydown", (e) => {
            if(Object.keys(KEYS_MAP).includes(e.key.toUpperCase())){
              if(e.repeat){return}
              const now = Tone.now();
              manageKey(synth, now)
            }
          });

          document.querySelectorAll('.key').forEach((key)=>{
            const now = Tone.now();
            key.onmousedown = (e) => manageClickKey(e, synth, now)
          })
        }, [synth])

    return(
        <div className="piano">
          <div className="white-key key">A</div>
          <div className="black-key key">W</div>
          <div className="white-key key" >S</div>
          <div className="black-key key" >E</div>
          <div className="white-key key" >D</div>
          <div className="white-key key" >F</div>
          <div className="black-key key" >T</div>
          <div className="white-key key" >G</div>
          <div className="black-key key" >Y</div>
          <div className="white-key key" >H</div>
          <div className="black-key key" >U</div>
          <div className="white-key key" >J</div>
          <div className="white-key key" >K</div>
          <div className="black-key key" >O</div>
          <div className="white-key key" >L</div>
          <div className="black-key key" >P</div>
          <div className="white-key key" >ENTER</div>
        </div>
    )


}

export default Keyboard