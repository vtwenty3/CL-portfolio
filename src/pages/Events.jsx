import { useState, useRef, useEffect } from "react";

import "./Events.css";
import Event from "../components/Event";
import EventImg from "./../assets/GuitarSquare.jpg";
export default function Events({ eventsData }) {
  return (
    <div className="events">
      <div className="global-fill">
        <img src={EventImg} alt="Event" />
      </div>
      <div className="events-container">
        <h2 className="events-heading global-heading">Events</h2>
        {eventsData.map(event => {
          return <Event eventObj={event} />;
        })}
      </div>
    </div>
  );
}




