import React, { useRef } from "react";
import { easeInOut, motion, useScroll, useTransform } from "framer-motion";
import { isMobile } from 'react-device-detect';
import "./Navbar.css";

const NavbarLink = ({ href, children, noSeparator }) => (
  <>
    <a href={href} className="navbar-each-button">
      {children}
    </a>
    {!noSeparator && <span className="navbar-each-button-separator">|</span>}

  </>
);

const minHeight = 10; // height when navbar is at the top
const maxHeight = 20; // initial height

function Navbar({ forwardRef }) {

  const mobileActivationPoitns = [0.22, 0.23];
  const desktopActivationPoints = [0.77, 0.78];

  const { scrollYProgress } = useScroll({
    target: forwardRef,
    offset: ["0svh", "90svh"],
  });
  const nasvheight = useTransform(
    scrollYProgress,
    isMobile ? mobileActivationPoitns : desktopActivationPoints,
    [`${maxHeight}svh`, `${minHeight}svh`] // values for the corresponding percentages
  );

  return (
    <motion.div
      // ref={navRef}
      className="navbar"
      initial={{ height: isMobile ? `${minHeight}svh` : `${maxHeight}svh` }}
      style={{
        height: isMobile ? `${minHeight}svh` : nasvheight,
        transition: `height 0.45s 0.35s`, // add delay
      }} // animate height based on state
    >
      <h1 className="navbar-title">Chris Lyons</h1>
      <div className="navbar-buttons">
        <NavbarLink href="#tuition" >Tuition</NavbarLink>
        <NavbarLink href="#media" >Media</NavbarLink>
        <NavbarLink href="#events">Events</NavbarLink>
        <NavbarLink href="#contact" noSeparator={true}>Contact</NavbarLink>
      </div>
    </motion.div>
  );
}

export default Navbar;
