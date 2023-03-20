import {useRef } from "react";

const Osciloscope = ({ana}) => {

    const canvas = useRef()

    function draw() {
        const canvasCtx = canvas.current.getContext("2d");
        requestAnimationFrame(draw);
        var waveArray = ana.getValue();
        canvasCtx.strokeStyle = "#00FF00";
        canvasCtx.lineWidth = 10;
        canvasCtx.clearRect(0, 0, window.innerWidth*2, window.innerHeight*2);
        canvasCtx.beginPath();
        for (var i = 0; i < waveArray.length; i+=4) {
          let x= (i/waveArray.length)*(window.innerWidth*2);
          if (i === 0) {
            canvasCtx.moveTo(0,(window.innerHeight)+ waveArray[i]);
          } else {
            canvasCtx.lineTo(x, (window.innerHeight)+waveArray[i]*400);
          }
        }
        canvasCtx.stroke();
      }

    canvas.current && draw()

    return(
        <canvas ref={canvas}  style={{width:window.innerWidth,height:window.innerHeight}} width={window.innerWidth / 2} height={window.innerHeight*2} id='oscilloscope'/>
        )
}


export default Osciloscope