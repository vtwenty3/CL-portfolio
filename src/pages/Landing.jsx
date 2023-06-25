import React, { useRef } from "react";
import "./Landing.css";

import ChrisImg from "./../assets/chrisrgb2.png";
import Tab from "@mui/base/Tab";
import TabsList from "@mui/base/TabsList";
import TabPanel from "@mui/base/TabPanel";
import Tabs from "@mui/base/Tabs";
export default function Landing({ forwardRef }) {
  return (
    <section>
      <div className="landing" ref={forwardRef}>
        <img src={ChrisImg} alt="Chris Lyons" />

        <div className="landing-content">
          {/* <h2 className="landing-heading">CHIRS LYONS</h2> */}
          <Tabs defaultValue={1}>
            <TabsList>
              <Tab value={1}>About</Tab>
              <Tab value={2}>Composition</Tab>
              <Tab value={3}>Specialisms</Tab>
            </TabsList>
            <TabPanel value={1}>
              Chris Lyons is a multi-genre musician and composer active in
              numerous genres and traditions and on several instruments.
              Although he is primarily a pianist, he also performs on guitar,
              violin, viola, bayan, oud and various unusual string instruments.
              He is considered to be an expert in such diverse fields as
              pastiche composition, classical improvisation and score-reading.
              He is also a highly sought-after tutor in jazz and classical piano
              performance with his former students including a number of
              internationally known musicians and even number-one-selling
              artists. He also runs all the balkan brass ensembles in Scotland
              and is a highly-skilled guitarist. He is a graduate of the Royal
              Academy of Music, London.
            </TabPanel>
            <TabPanel value={2}>
              Attempting to summarise Chris’ activities in this field is fairly
              futile! He is a prolific polystylistic composer whose music,
              particularly nowadays always seeks to make a connection with
              audience and performer, such that they wish to return to it and
              develop a relationship with it. He very much believes in making
              music that will be performed repeatedly and that people can engage
              with. His music has been performed internationally and he is the
              recipient of a number of composition prizes. His music has also
              recently been in a BAFTA nominated film. He is contracted with
              Broadcast Music Incorporated
            </TabPanel>
            <TabPanel value={3}>
              Repetiteur skills and experience Music theory knowledge to the
              highest level including things like counterpoint, figured bass
              improvisation, fugal composition, common practice harmony and
              contemporary practice. Huge knowledge of classical repertoire and
              piano literature innovative (and demonstrably successful) approach
              to piano pedagogy and technique Highly skilled and experienced
              orchestrator with abilities in pastiche composition of many eras
              and styles Multiple instrument/style session music performance
              with flawless reading, sight transposing, perfect pitch etc Wide
              knowledge of a number of a number of world folk traditions. In
              addition: Virtuoso sight-reading ability on Electric Guitar and
              performance of new works Skills in choral conducting Competent
              bluegrass, manouche and folk fiddler and banjo player!
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
