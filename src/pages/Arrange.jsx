import React from "react";
import "./Arrange.css";
import ArrangeImg from "./../assets/ChrisOnPianoSquare.jpg";
import BBC from "./../assets/bbc.png";
import CNN from "./../assets/cnn.png";
import Button from "../components/Button"

export default function Arrange() {
  return (
    <div className="arrange">
      <div class="global-fill">
        <img src={ArrangeImg} alt="Arrange" />
      </div>
      <div className="arrange-content">
        <h2 className="arrange-heading global-heading">Arrangement and Orchestration</h2>
        <p className="arrange-paragraph">
          Chris offers instrumental tuition to the highest level with
          particular specialism in piano technique, improvisation and practice
          methods. He also offers ‚musicianship bootcamp‘ classes which are
          not for the fainthearted, to put it mildly. Whilst most of his
          students are tending towards professional level, he does admit
          students of varying ages and experience and is an approachable,
          enthusiastic and friendly teacher.
        </p>
        <Button title="Contact Chris" onClick={() => console.log("hibe")} />
      </div>

    </div>
  );
}
