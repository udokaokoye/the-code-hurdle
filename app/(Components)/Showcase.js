"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEnvelope, faCalendarAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";
import LatestEpisode from "./LatestEpisode";
function Showcase() {
  return <div className="showcaseContainer">
    <div className="showcaseLatestEpisode">
      <h3 className="latestEpisodeNumber">Episode 001</h3>
      <h1 className="latestEpisodeTitle">BootCamp: Discussing The Challenges Of A BootCamp With Jane Doe.</h1>
      <p className="latestEpisodeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vit. sum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vit. sum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vit. <span>more...</span> </p>
      <div className="episodeDate">
      <FontAwesomeIcon icon={faCalendarAlt} className="calendarIcon" /> &nbsp; April 10th 2023
      </div>
      <div className="playLatestEpisodeButton">
        <div className="playIconContainer">
          <FontAwesomeIcon icon={faPlay} className="playIcon icon" />
        </div> Play now
      </div>
      <div className="showcaseButtons">
        <button className="allEpisodesButton">All Episodes</button> 
        <button className="listenNow">Listen Now</button>
      </div>
    </div>
    <div className="showcaseImage"></div>
  </div>;
}

export default Showcase;
