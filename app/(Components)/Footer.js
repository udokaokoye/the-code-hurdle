'use client'
// import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            {/* <div className="footerLocation"><FontAwesomeIcon className='footerIcons' icon={faMapMarkerAlt} /> Cincinnati Ohio</div> */}
            <div className="footerLinks">
                {/* <FontAwesomeIcon className='footerIcons' icon={faInstagram} /> */}
                {/* <FontAwesomeIcon className='footerIcons' icon={faTwitter} /> */}
                {/* <FontAwesomeIcon className='footerIcons' icon={faEnvelope} /> */}
            </div>
            <button className='contactButton_footer'>Contact Us</button>
        </div>
    </div>
  )
}

export default Footer