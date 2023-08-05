import React from "react";
import { BsYoutube, BsVimeo } from "react-icons/bs";
import { FaYoutube, FaVimeo } from "react-icons/fa";
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from "react-icons/ti";

import "./Media.css";
import Event from "../components/Event";
import Button from "../components/Button"
export default function Media() {
  const scrollToEvents = () => {
    const eventsElement = document.getElementById('events');
    if (eventsElement) {
      eventsElement.scrollIntoView({
        behavior: 'smooth', // optional, for smooth scrolling
        block: 'start'      // optional, scrolls the start of the target into view
      });
    }
  };
  return (
    <div className="media" >
      <div className="media-content">
        <div className="media-text">
          <h2 className="media-heading global-heading">Performance</h2>
          <p className="media-paragraph">
            Chris maintains a busy public performance schedule both solo and
            with a number of ensembles. He is regularly engaged as a session
            performer on a number of instruments (piano, guitar, bass etc)
          </p>
          <div className="media-buttons">
            <TiSocialYoutubeCircular />
            <TiSocialVimeoCircular />

          </div>

        </div>
        <div className="media-video">
          {/* <iframe
            className="media-video"
            src={`https://player.vimeo.com/video/729895495?h=20948347c3&color=ff9933`}
            frameBorder="0"
            title="Embedded vimeo"
          /> */}

          <iframe className="media-video" src="https://www.youtube.com/embed/K2kQuDfStzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
      <div className="eventbar">
        <span className="eventbar-heading">Next event:</span>
        <Event />
        <div className="eventbar-button">
          <Button title="All Events" onClick={scrollToEvents} />
        </div>
      </div>
    </div>
  );
}
