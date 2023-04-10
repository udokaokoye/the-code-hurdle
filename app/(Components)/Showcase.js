"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import LatestEpisode from "./LatestEpisode";
function Showcase() {
  return (
    <div className="mainContainer">
      <div className="showcaseInner">
        <h1>The</h1>
        <h1>Code</h1>
        <h1>Hurdle</h1>
        <h1>Podcast</h1>
        <div className="showCaseButtons">
          <button>
            {" "}
            <FontAwesomeIcon icon={faPlay} color="white" /> Listen Now
          </button>
          <button>
            <FontAwesomeIcon icon={faEnvelope} color="white" /> Subscribe
          </button>
        </div>
      </div>
      <LatestEpisode />
    </div>
  );
}

export default Showcase;
