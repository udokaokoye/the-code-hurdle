import React from 'react'
import { faBackward, faForward, faLongArrowAltRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EpisodeCard() {
  
  return (
    <div className='episodeCard'>
      <div className="episodeArt"></div>
      <div className="episodeDetails">
        <span className="episodeNumber">Episode 2</span>
        <span className="episodeTitle">Jane Doe: The Struggles Of Beign A Developer</span>
        <span className="episodeDate">11 April 2023</span>
        <span className="hostGuest">Host: Levi Okoye | Guest: Jack Doe</span>

      </div>
      <div className="episodeActions">
      <div className="playButton"><FontAwesomeIcon size={'50'} icon={faPlay} /></div>
      <button>View Episode <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
      </div>
    </div>
  )
}

export default EpisodeCard