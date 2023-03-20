import React, { useState, useRef } from 'react';
import * as Tone from 'tone';
import manageKey from '../utils/manageKey';

const Looper = ({ synth, current }) => {

  const [events, setEvents] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const loopRef = useRef(null);

  const playNoteAndAddToSequence = (key, synth, time) => {
    if (Object.keys(KEYS_MAP).includes(key.toUpperCase())) {
      const note = KEYS_MAP[key.toUpperCase()];
      synth && synth.triggerAttack(note, time);
      setEvents((prevEvents) => [...prevEvents, { note, time }]);
      window.addEventListener('keyup', () =>
        synth && synth.triggerRelease(Tone.now())
      );
    }
  };

  const scheduleEvents = () => {
    events.forEach(({ note, time }) => {
        Tone.Transport.schedule((time) => {
            synth.triggerAttackRelease(note, [current.atc, current.rls], time);
          }, time);

    });
  };


  const handleRecord = () => {
    setEvents([]);
    
  };
  
  const handleStop = () => {
    
  };
  
  const handlePlay = () => {
   
  };

  return (
    <div className='looper'>
      <button onClick={handleRecord}>RECORD</button>
      <button onClick={handleStop}>STOP</button>
      <button onClick={handlePlay}>PLAY</button>
    </div>
  );
};

export default Looper;