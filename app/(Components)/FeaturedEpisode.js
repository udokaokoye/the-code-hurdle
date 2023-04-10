'use client'
import React from 'react'
import EpisodeCard from './EpisodeCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function FeaturedEpisode() {
  return (
    <div className='featuredEpisode'>
        <div className="episodesTopBar">
        <h1>Episodes</h1>
        <div className="searchEpisode">
            <input type="text" placeholder='Search episode/guests...' />
            <div className="searchIcon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </div>
        </div>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <br /><br />
    </div>
  )
}

export default FeaturedEpisode