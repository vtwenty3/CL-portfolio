import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

import "./Event.css";

export default function Event() {
  return (
    <div className="event">
      <div className="event-info">
        <div className="event-time">
          <span>10th of Sep</span>
          <span> 12.00pm</span>
        </div>
        <div className="event-location">
          <span> La Belle Angele, Edinburgh</span>
        </div>
      </div>

      <MdArrowForwardIos className="event-arrow" />
    </div>
  );
}
