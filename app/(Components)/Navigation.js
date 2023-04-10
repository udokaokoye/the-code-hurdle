'use client'
import React from 'react'
import { useAppContex } from '../contex/store'

function Navigation() {
  const {demo, setdemo, side, setside} = useAppContex()

  return (
    <div className="navigationContainer">
      <div className="leftLinks">
        <span>Home</span>
        <span>Library</span>
        <span>Subscribe</span>
        <span>About</span>
        <span>Be a guest</span>
      </div>
      <div className="logo">
        The Code Hurdle Podcast
      </div>
      <div className="rightLinks">
        <div className="applePodcast podcastbanner"></div>
        <div className="spotifyPodcast podcastbanner"></div>
      </div>
    </div>

  )
}

export default Navigation