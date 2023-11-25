import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const Chords = () => {
  return (
    <div class="container-fluid" style={{ padding: 30 }}>
      <h1 style={{ color: "white" }}>Chords in A Piano</h1>
      <br></br>
      <p align="left" style={{ color: "white" }}>
        A chord, in music, is any harmonic set of pitches/frequencies consisting
        of multiple notes, (also called "pitches") that are heard as if sounding
        simultaneously.<br></br>
        There are two types of chords : <br></br>
        <br></br>
      </p>
      <h4 style={{ color: "#73bbee" }} align="left">
        <b>1. Major Chords: </b>
      </h4>{" "}
      <br></br>
      <p align="left" style={{ color: "white" }}>
        For finding major chord of a note: <br></br>
        The root note + 4 half steps + 3 half steps (these will be the three
        notes that corresponds to that chord). <br></br>
        Ex. Finding major chord for c : <br></br>
        Root note : C <br></br>
        Root note + 4 half steps = E <br></br>E + 3 half steps = G <br></br>
        So (C + E + G) corresponds to the major C chord. <br></br>
        <br></br>
      </p>
      <h4 style={{ color: "#73bbee" }} align="left">
        <b>2. Minor Chords: </b>
      </h4>{" "}
      <br></br>
      <p align="left" style={{ color: "white" }}>
        For finding minor chord of a note: <br></br>
        The root note + 3 half steps + 4 half steps (these will be the three
        notes that corresponds to that chord). <br></br>
        Ex. Finding minor chord for c : <br></br>
        Root note : C <br></br>
        Root note + 3 half steps = D# <br></br>E + 4 half steps = G <br></br>
        So (C + D# + G) corresponds to the minor C chord. <br></br>
        <br></br>
        Now that we know the basic concept of chords, let's start learning the
        various different major and minor chords.
      </p>
      <Button variant="outline-primary">
        <Link to="/notes/a" style={{ color: "white", padding: 20 }}>
          {" "}
          Let's Get Started{" "}
        </Link>
      </Button>
      <br></br>
    </div>
  );
};
