import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import "./Event.css";

export default function Event({ eventObj }) {
  function transformDate(dateString) {
    const months = [
      ' ', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ];
    const [day, month, year] = dateString.split(".");
    return { day, month: months[parseInt(month)], year };
  }
  const { day, month } = transformDate(eventObj.Date);
  return (
    <a href={eventObj.Link} target="_blank" rel="noopener noreferrer" className="event-link">

      <div className="event">
        <div className="event-date">
          <h2>{day}</h2>
          <span>{month}</span>
        </div>
        <div className="event-info">
          <h2>{eventObj.Name}</h2>
          <span>{eventObj.Location}</span>
        </div>
        <div className="event-arrow">
          <MdArrowForwardIos className="event-arrow-icon" />
        </div>
      </div>
    </a>

  );
}
