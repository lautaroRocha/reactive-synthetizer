import { useDispatch, useSelector } from "react-redux";
import { setVol } from "../redux/synthSlice";

const Volume = () => {

    const dispatch = useDispatch()
    const currentValue = useSelector((state)=>state.synth.vol)

    
    return(
    <label onChange={(e)=>{dispatch(setVol(parseInt(e.target.value)))}} className="volume">VOLUME
        <input type="range" min="-50" max="100" defaultValue={currentValue} step="10" />
    </label>
    )
}

export default Volume;