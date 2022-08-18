import React from 'react'
import {AiFillFastForward,AiFillFastBackward,AiOutlinePause,AiOutlinePlayCircle} from "react-icons/ai"
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
//import { faPlay, faPause, faForward, faBackward } from '@fontawesome/free-solid-svg-icons/'
//<FontAwesomeIcon icon={faBackward} />
//<FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
//<FontAwesomeIcon icon={faForward} />



function Controls(props) {
    return (
        <div className="c-player--controls">
            <button className="skip-btn" onClick={() => props.SkipSong(false)}>
            <AiFillFastBackward/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
               {props.isPlaying ? <AiOutlinePause/> : <AiOutlinePlayCircle/>}
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
            <AiFillFastForward/>
            </button>
        </div>
    )
}

export default Controls