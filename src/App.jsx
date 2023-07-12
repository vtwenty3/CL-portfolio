import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Media from "./pages/Media";
import Arrange from "./pages/Arrange";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";

import "./App.css";

function App() {
  const landingRef = useRef(null);

  return (
    <>
      <div className="app">
        <Landing forwardRef={landingRef} />
        <div className="nav-wrap">
          <Navbar forwardRef={landingRef} />
        </div>
        <div className="filler"></div>
        <section>
          <Media />
        </section>
        <section>
          <Arrange />
        </section>
        <section>
          <Events />
        </section>
        <section>
          <Contacts />
        </section>
      </div>
    </>
  );
}

export default App;
