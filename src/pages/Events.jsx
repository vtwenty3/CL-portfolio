import { useState, useRef, useEffect } from "react";

import "./Events.css";
import Event from "../components/Event";
import EventImg from "./../assets/GuitarSquare.jpg";
export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1Tkixy_-BaH7A5lLPFf5Yff-5Vt5XlSbaMLCAPt4JY_g/1")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  function transformDate(dateString) {
    const months = [
      '', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
    ];

    const [day, month, year] = dateString.split(".");
    return { day, month: months[parseInt(month)], year };
  }

  function stringToDate(dateString) {
    const [day, month, year] = dateString.split(".");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    // month - 1 because months in JavaScript Date are 0-based (0 for January, 1 for February, etc.)
  }
  return (
    <div className="events">
      <div className="global-fill">
        <img src={EventImg} alt="Event" />
      </div>
      <div className="events-container">
        <h2 className="events-heading global-heading">Events</h2>
        {events.map(event => {
          const { day, month } = transformDate(event.Date); // Assuming 'Date' is the key for the date string in your fetched data
          return (
            <Event
              key={event.Link}
              date={day}
              month={month}
              title={event.Name}
              location={event.Location}
              link={event.Link}
            />
          )
        })}
      </div>
    </div>
  );
}




