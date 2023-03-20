import{ useSelector, useDispatch} from 'react-redux'
import {setAttack, setRelease, setDecay, setSustain} from '../redux/envelopeSlice'


const Envelope = () => {

    const dispatch = useDispatch()
    const {atc, dcy, rls, stn} = useSelector((state) => state.envelope)

    return(
        <div className="envelope"> 
        <label onChange={(e)=>{dispatch(setAttack(parseFloat(e.target.value)))}}>ATTACK
            <input type="range" min="0" max="5" defaultValue={atc} step="0.1" />
        </label>  
        <label onChange={(e)=>{dispatch(setDecay(parseFloat(e.target.value)))}}>DECAY
            <input type="range" min="0" max="5" defaultValue={dcy} step="0.1" />
        </label>
        <label htmlFor="" onChange={(e)=>{dispatch(setSustain(parseFloat(e.target.value)))}}>SUSTAIN
            <input type="range" min="0" max="1" defaultValue={stn} step="0.1"  />
        </label>
        <label onChange={(e)=>{dispatch(setRelease(parseFloat(e.target.value)))}}>RELEASE
            <input type="range" min="0" max="5" defaultValue={rls} step="0.1" />
        </label>
    </div>
    )
}

export default Envelope;