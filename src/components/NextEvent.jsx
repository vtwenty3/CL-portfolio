import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

import "./NextEvent.css";

export default function NextEvent() {
  return (
    <div className="event">
      <span className="event-heading"> Next event:</span>
      <div className="event-info">
        <div className="event-time">
          {/* <AiOutlineCalendar /> */}
          <span>10th of Sep</span>
          {/* <BiTime /> */}
          <span> 12.00pm</span>
        </div>
        <div className="event-location">
          {/* <FaLocationArrow /> */}
          <span> La Belle Angele, Edinburgh</span>
        </div>
      </div>
      <span className="event-button">All Events</span>
    </div>
  );
}
