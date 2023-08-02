import React from "react";
import "./Events.css";
import Event from "../components/Event";
import EventImg from "./../assets/GuitarSquare.jpg";

export default function Events() {
  return (
    <div className="events">
      <div className="global-fill">
        <img src={EventImg} alt="Event" />
      </div>
      <div className="events-container">
        <h2 className="events-heading">Events</h2>
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}
