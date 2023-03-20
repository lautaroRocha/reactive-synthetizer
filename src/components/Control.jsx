import WaveSelector from "./WaveSelector"
import Envelope from "./Envelope";

function Control () {
    return(
       <div className="control">
            <WaveSelector /> 
            <Envelope />
       </div>
    )
}

export default Control;