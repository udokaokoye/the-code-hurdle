"use client";
import { faBackward, faForward, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
function LatestEpisode() {
  return (
    <div className="latestEpisode">
      <div className="podcastArt"></div>
      <div className="podcastDetails">
        <span className="epNo">Episode 1</span>
        <span className="epTitle">
          Jane Doe: The Struggles Of Beign A Developer
        </span>
        <div className="epHostGuest">
          <span>Host: Levi Okoye</span>
          <span>|</span>
          <span>Guest: Jane Doe</span>
        </div>
      </div>
      <div className="podcastPlayer">
        <audio src={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}></audio>
        <div class="controls">
          <button class="rewind"><FontAwesomeIcon icon={faBackward} /></button>
          <button class="play-pause"><FontAwesomeIcon icon={faPlay} /></button>
          <button class="forward"><FontAwesomeIcon icon={faForward} /></button>
          <div class="progress">
            <span className="currentTime">00.00</span>
            <input type="range" min={0} className="slider" />
            <span className="duration">16.20</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestEpisode;
