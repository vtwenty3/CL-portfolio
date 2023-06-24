import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Media from "./pages/Media";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Landing />
        <Navbar />
        <Media />
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
