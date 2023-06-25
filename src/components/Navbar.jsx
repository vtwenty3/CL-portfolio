import React, { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import "./Navbar.css";

const NavbarLink = ({ href, children }) => (
  <a href={href} className="navbar-each-button">
    {children}
  </a>
);

const minHeight = 10; // height when navbar is at the top
const maxHeight = 20; // initial height

function Navbar({ forwardRef }) {
  const navRef = useRef(null); // Reference to navbar
  // const { scrollYProgress } = useScroll({ container: forwardRef });

  const { scrollYProgress } = useScroll({
    target: forwardRef,
    offset: ["0dvh", "90dvh"],
  });
  // Adjust the navHeight transformation to change during the last 20 percent of the scroll
  const navHeight = useTransform(
    scrollYProgress,
    [0.7, 0.8], // change happens between 80% and 100% of scroll
    [`${maxHeight}dvh`, `${minHeight}dvh`] // values for the corresponding percentages
  );

  return (
    <div className="nav-wrap">
      <motion.div
        // ref={navRef}
        className="navbar"
        initial={{ height: `${maxHeight}dvh` }}
        style={{
          height: navHeight,
          transition: `height 0.45s 0.35s`, // add delay
        }} // animate height based on state
      >
        <h1 className="navbar-title">Chris Lyons</h1>
        <div className="navbar-buttons">
          <NavbarLink href="#tuition">Tuition</NavbarLink>
          <NavbarLink href="#media">Media</NavbarLink>
          <NavbarLink href="#events">Events</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
