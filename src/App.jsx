import { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Media from "./pages/Media";
import Arrange from "./pages/Arrange";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import ContactForm from "./pages/ContactForm";
import { motion } from "framer-motion"

import "./App.css";

function App() {
  const landingRef = useRef(null);

  return (
    <>
      <div className="app">
        <motion.section
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2, }}
          id="home">
          <Landing forwardRef={landingRef} />
        </motion.section>
        <div
          className="nav-wrap">
          <Navbar forwardRef={landingRef} />
        </div>
        <div className="filler"></div>
        <motion.section
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2, }}
          id="media">
          <Media />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2, }}
          id="arrange">
          <Arrange />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2, }}
          id="events">
          <Events />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4, }}
          id="contact">
          <ContactForm />
        </motion.section>
      </div>
    </>
  );
}

export default App;
{/* <motion.section>
          <Contacts />
        </motion.section> */}