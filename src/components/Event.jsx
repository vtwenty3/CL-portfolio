import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

import "./Event.css";

export default function Event() {
  return (
    <div className="event">
      <div className="event-date">
        <h2>10</h2>
        <span>sep</span>
      </div>
      <div className="event-info">
        <h2>Event Title</h2>
        <span>Edinburgh, La Belle Angele</span>
      </div>
      <div className="event-arrow">
        <MdArrowForwardIos className="event-arrow" />
      </div>
    </div>
  );
}
