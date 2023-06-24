import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Media from "./pages/Media";

import "./App.css";

function App() {
  return (
    <>
      <Landing />
      <Navbar />
      <Media />
      <div class="content">
        <div id="tuition">Tuition Section Content</div>
        <div id="media">Media Section Content</div>
        <div id="events">Events Section Content</div>
        <div id="contact">Contact Section Content</div>
      </div>
    </>
  );
}

export default App;
