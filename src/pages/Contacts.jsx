import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="iframeContainer">
        <iframe
          className="googleForm"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf7x_F0EIbShbdaPQodaP5yMrw9blDTlMJN6V5JLre2y2OSkw/viewform?embedded=true"
          frameborder="0"
          allowfullscreen
        >
          Loading…
        </iframe>
      </div>    </div>
  );
}
