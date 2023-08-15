import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import "./Event.css";

export default function Event({ date, month, title, location, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="event-link">

      <div className="event">
        <div className="event-date">
          <h2>{date}</h2>
          <span>{month}</span>
        </div>
        <div className="event-info">
          <h2>{title}</h2>
          <span>{location}</span>
        </div>
        <div className="event-arrow">
          <MdArrowForwardIos className="event-arrow-icon" />
        </div>
      </div>
    </a>

  );
}
