import React from "react";
import "./Events.css";
import Event from "../components/Event";
import EventImg from "./../assets/event.png";

export default function Events() {
  return (
    <div className="events">
      <div className="events-container">
        <Event />
        <Event />
        <Event />
      </div>
      <div>
        <img src={EventImg} alt="Event" className="events-img" />
      </div>
    </div>
  );
}
