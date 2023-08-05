import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Media from "./pages/Media";
import Arrange from "./pages/Arrange";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import ContactForm from "./pages/ContactForm";

import "./App.css";

function App() {
  const landingRef = useRef(null);

  return (
    <>
      <div className="app">
        <section id="home">
          <Landing forwardRef={landingRef} />
        </section>
        <div className="nav-wrap">
          <Navbar forwardRef={landingRef} />
        </div>
        <div className="filler"></div>
        <section id="media">
          <Media />
        </section>
        <section id="arrange">
          <Arrange />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </>
  );
}

export default App;
{/* <section>
          <Contacts />
        </section> */}