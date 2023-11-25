import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import img1 from "./images/1.png";
import img2 from "./images/key.jpeg";

export const Intro = () => {
  return (
    <div class="container-fluid" style={{ padding: 30 }}>
      <h1 style={{ color: "white" }}>Getting Started</h1>
      <br></br>
      <h4 align="left" style={{ color: "#73bbee" }}>
        <b>Notes</b>
      </h4>
      <img src={img2} align="right" height={150}></img>
      <p align="left" style={{ color: "white" }}>
        A note is the representation of a musical sound.<br></br>
        In traditional Indian music, musical notes are represented using the
        seven notes,<br></br>
        Sa, Re, Ga, Ma, Pa, Dha and Ni.<br></br>
      </p>
      <h4 align="left" style={{ color: "#73bbee" }}>
        <b>12-tone chromatic scale</b>
      </h4>
      <br></br>

      <p align="left" style={{ color: "white" }}>
        In English the names of notes are as follows :<br></br>{" "}
        <img src={img1} align="right" height={150}></img>C , C# , D , D# , E , F
        , F# , G , G# , A , A# , B. <br></br> # represents the sharp. <br></br>{" "}
        C , D , F , G , A have sharps i.e go half step ahead of C you'll get C#.{" "}
        <br></br>The following image illustrates how the notes are arranged on a
        keyboard.
      </p>

      <p align="left" style={{ color: "white" }}>
        This website presents you with a one octane keyboard to try out the
        various concepts you learn.<br></br>
        To be able to use this online keyboard, let us first see which letter on
        the physical keyboard corresponds to which note. <br></br>
      </p>
      <br></br>
      <Button variant="outline-primary">
        <Link to="/chords" style={{ color: "white", padding: 20 }}>
          {" "}
          Next{" "}
        </Link>
      </Button>
    </div>
  );
};
