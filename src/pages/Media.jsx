import React from "react";
import "./Media.css";
export default function Media() {
  return (
    <div>
      <div className="media">
        <div>
          <h2 className="media-heading">PERORMANCE</h2>
          <p>
            Chris maintains a busy public performance schedule both solo and
            with a number of ensembles. He is regularly engaged as a session
            performer on a number of instruments (piano, guitar, bass etc)
          </p>
        </div>
        <div className="media-video">
          <iframe
            className="media-video"
            src={`https://player.vimeo.com/video/729895495?h=20948347c3&color=ff9933`}
            frameBorder="0"
            title="Embedded vimeo"
          />
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  );
}
