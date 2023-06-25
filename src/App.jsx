import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Media from "./pages/Media";

import "./App.css";

function App() {
  const landingRef = useRef(null);

  return (
    <>
      <div className="app">
        <Landing forwardRef={landingRef} />

        <Navbar forwardRef={landingRef} />
        <div className="filler"></div>

        <section>
          <Media />
        </section>

        <div className="content">
          <h1 id="tuition">Tuition Section Content</h1>
          <h1 id="media">Media Section Content</h1>
          <h1 id="events">Events Section Content</h1>
          <h1 id="contact">Contact Section Content</h1>
        </div>
      </div>
    </>
  );
}

export default App;
