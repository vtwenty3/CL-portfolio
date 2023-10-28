import { useState, useRef, useEffect } from "react";
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
  const [loading, setLoading] = useState(true);

  const [eventsData, setEventsData] = useState([
    {
      Date: "23.02.2223",
      Link: "https://www.chrislyonsmusic.com/",
      Name: "No Upcoming Events",
      Location: "Edinburgh"
    }
  ]);

  function stringToDate(dateString) {
    const [day, month, year] = dateString.split(".");
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  useEffect(() => {
    setLoading(true);

    // Default data structure

    fetch("https://opensheet.elk.sh/1Tkixy_-BaH7A5lLPFf5Yff-5Vt5XlSbaMLCAPt4JY_g/1")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data) || data.length === 0) {
          // Set the default data if the response is not meaningful
          // setEventsData(defaultEventsData);
          setLoading(false);
          return;
        }

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Resetting time to midnight
        const filteredAndSorted = data
          .filter(event => stringToDate(event.Date) >= currentDate)
          .sort((a, b) => stringToDate(a.Date) - stringToDate(b.Date))
          .slice(0, 4);
        if (filteredAndSorted.length === 0) {
          setLoading(false);
          return
        }
        setEventsData(filteredAndSorted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Set the default data in case of an error
        // setEventsData(defaultEventsData);
        setLoading(false);
      });
  }, []);
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
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Media eventsData={eventsData} loading={loading} />
          )}
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
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Events eventsData={eventsData} />
          )}
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