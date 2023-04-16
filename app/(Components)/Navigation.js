'use client'
import React from 'react'
import { useAppContex } from '../(contex)/store.js'

function Navigation() {
  const {demo, setdemo, side, setside} = useAppContex()

  return (
    <div className="navigationContainer">
      <div className="leftLinks">
        <span className='active'>Home</span>
        <span>Episodes</span>
        <span>Subscribe</span>
        <span>About</span>
        <span>Contact</span>
        <span>Blog</span>
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