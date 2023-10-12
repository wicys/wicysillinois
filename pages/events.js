import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import React from "react";

//import "styles/globals.css";
//without images - need to download images
export default function Events() {
  return (
    <div className="container">
      <div className="overlap">
        <div className="overlap-group">
          <img className="rectangle" alt="Rectangle" />
          <img className="wicys-white-logo" alt="Wicys white logo" /> 
        </div>
        <img className="events-EOH-board" alt="Events EOH board" />
      </div>
      <img className="events" alt="Events" />
      <img className="img" alt="Img"  />
      <img className="img-2" alt="Img"  />
      <div className="div">
        <img className="image" alt="Image"  />
        <img className="mask-group" alt="Mask group"  />
      </div>
      <img
        className="wicys-illinois-cd"
        alt="Wicys illinois cd"
        //src="wicys-illinois-cd-wicys-illinois-cd-events-wicys.png"
      />
      <img
        className="women-in"
        alt="Women in"
       // src="women-in-cybersecurity-illinois-have-general-meetings-on-day-of-the-week-at-time-CST-every-2-weeks-our-meetings-are-generally-workshops-corporate-talks-networking-events-social-hangouts-etc-we-post-our-meetings-on-instagram-and-discord-and-are-usually-within-the-engineering-quad-on-this-page-you-will-find-our-calendar-past-events-and-meeting-slides-and-future-events-to-keep-members-updated.png"
      />
      <div className="corporate-wrapper">
        <img className="corporate" alt="Corporate" />
      </div>
      <div className="social-wrapper">
        <img className="social" alt="Social" />
      </div>
    </div>
  )
}


