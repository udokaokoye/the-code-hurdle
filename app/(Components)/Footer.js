'use client'
import React from 'react'

function Footer() {
  return (
    <div className="footerContainer">
        <div className="footerAbout">
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,</p>
        </div>
        <div className="footerRecentEpisode">
            <h1>Recent Episodes</h1>
            <span className="FTRecentEP">Bootcamp: Discussing The Challenges</span>
            <span className="FTRecentEP">Bootcamp: Discussing The Challenges</span>
            <span className="FTRecentEP">Bootcamp: Discussing The Challenges</span>
            <span className="FTRecentEP">Bootcamp: Discussing The Challenges</span>
            <span className="FTRecentEP">Bootcamp: Discussing The Challenges</span>
        </div>
        <div className="footerContact">
            <h1>Contact</h1>
            <button>Contact Us</button>
            <div className="footerLinks">
                {/* !SOCIAL MEDIA LINKS */}
            </div>
        </div>
    </div>
  )
}

export default Footer