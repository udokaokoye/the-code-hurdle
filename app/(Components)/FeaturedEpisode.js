'use client'
import React from 'react'
import EpisodeCard from './EpisodeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSearch } from '@fortawesome/free-solid-svg-icons'

function FeaturedEpisode() {
  return (
    <div className='featuredEpisodeContainer'>
        <h1>Start Listening Today</h1>
        <h2>Featured Episoded</h2>

        <div className="featuredEpisodeList">
          <div className="featuredEpisode">
            <h3 className='featuredEpisodeNumber'>EPISODE <span>001</span></h3>
            <h3 className='featuredTitle'>BootCamp: Discussing The Challenges Of A BootCamp With Jane Doe.</h3>
            <div className="featuredDateandDuration"><span>April 22nd 2023</span> <span>20:25:10</span></div>
            <p className="featuredEpisodeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,  </p>
            <button className="featuredEpisodePlayButton"><FontAwesomeIcon icon={faPlay} /> Play Now</button>
          </div>

          <div className="featuredEpisode">
            <h3 className='featuredEpisodeNumber'>EPISODE <span>002</span></h3>
            <h3 className='featuredTitle'>BootCamp: Discussing The Challenges Of A BootCamp With Jane Doe.</h3>
            <div className="featuredDateandDuration"><span>April 22nd 2023</span> <span>20:25:10</span></div>
            <p className="featuredEpisodeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,  </p>
            <button className="featuredEpisodePlayButton"><FontAwesomeIcon icon={faPlay} /> Play Now</button>
          </div>

          <div className="featuredEpisode">
            <h3 className='featuredEpisodeNumber'>EPISODE <span>003</span></h3>
            <h3 className='featuredTitle'>BootCamp: Discussing The Challenges Of A BootCamp With Jane Doe.</h3>
            <div className="featuredDateandDuration"><span>April 22nd 2023</span> <span>20:25:10</span></div>
            <p className="featuredEpisodeDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,  </p>
            <button className="featuredEpisodePlayButton"><FontAwesomeIcon icon={faPlay} /> Play Now</button>
          </div>
        </div>
        <br /><br /><br /><br /><br />
    </div>
  )
}

export default FeaturedEpisode