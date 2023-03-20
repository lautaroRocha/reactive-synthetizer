import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setOsc } from "../redux/synthSlice"

const WaveSelector = () => {


    const dispatch = useDispatch()
    const currentWave = useSelector((state) => state.synth.osc)

    useEffect(() => {
        markCurrent()
    }, [currentWave])
    

    const handleWaveChoice = (e) => {
        if(currentWave !== e.target.dataset.wave){
            dispatch(setOsc(e.target.dataset.wave))
        }
    }
    
    const markCurrent = () => {
        const waves = document.querySelectorAll('li')
        waves.forEach( (li) =>{
            if(li.dataset.wave !== currentWave){
                li.classList.remove('selected')
            }else{
                li.classList.add('selected')
            }
        } )
    }

    return(
    <label htmlFor="" className="wave-selector">
        OSCILADOR
        <ul>
            <li data-wave="sine" onClick={handleWaveChoice}><img src="src\assets\sine.png" alt="" /></li>
            <li data-wave="sawtooth" onClick={handleWaveChoice}><img src="src\assets\sawtooth.png" alt="" /></li>
            <li data-wave="triangle" onClick={handleWaveChoice}><img src="src\assets\triangle.png" alt="" /></li>
            <li data-wave="square" onClick={handleWaveChoice}><img src="src\assets\square.png" alt="" /></li>
        </ul>
    </label>  
    )

}

export default WaveSelector