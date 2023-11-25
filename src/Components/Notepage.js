import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Piano } from "./Piano";
import { majornotes, minornotes } from "../global/vars";
function Notepage() {
  const [majnotes, setmajNotes] = useState([]);
  const [minotes, setminNotes] = useState([]);
  let params = useParams();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a71100836cmsh96579045a8ea5a1p10cc89jsn95ca01092471",
      "X-RapidAPI-Host": "piano-chords.p.rapidapi.com",
    },
  };
  const fetchmajNotes = () => {
    const url =
      "https://piano-chords.p.rapidapi.com/chords/" + params.note + "/major";
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setmajNotes(data.notes);
        majornotes[params.note] = data.notes;
      });

    console.log(majornotes);
  };

  const fetchminNotes = () => {
    const url =
      "https://piano-chords.p.rapidapi.com/chords/" + params.note + "/m";
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setminNotes(data.notes);
        minornotes[params.note] = data.notes;
      });

    console.log(minornotes);
  };

  useEffect(() => {
    if (majornotes[params.note].length === 0) fetchmajNotes();
    if (minornotes[params.note].length === 0) fetchminNotes();
  });
  return (
    majornotes[params.note].length > 0 &&
    minornotes[params.note].length > 0 && (
      <>
        <h1 style={{ color: "#eeeeee" }}>
          {" "}
          Root Note :{" "}
          {params.note.length > 1
            ? params.note[0].toUpperCase() + "#"
            : params.note.toUpperCase()}
        </h1>

        <div className="px-5">
          <Accordion defaultActiveKey={["0", "1"]}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                The{" "}
                {params.note.length > 1
                  ? params.note[0].toUpperCase() + "#"
                  : params.note.toUpperCase()}{" "}
                Major Chord
              </Accordion.Header>
              <Accordion.Body>
                Using the formula , the Major chord of{" "}
                {params.note.length > 1
                  ? params.note[0].toUpperCase() + "#"
                  : params.note.toUpperCase()}{" "}
                is a combination of {majornotes[params.note][0]},{" "}
                {majornotes[params.note][1]} and {majornotes[params.note][2]}{" "}
                notes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Try it Out</Accordion.Header>
              <Accordion.Body>
                <div style={{ alignItems: "center", padding: 20 }}>
                  <Piano answers={majornotes[params.note]} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                The{" "}
                {params.note.length > 1
                  ? params.note[0].toUpperCase() + "#"
                  : params.note.toUpperCase()}{" "}
                Minor Chord
              </Accordion.Header>
              <Accordion.Body>
                Using the formula , the Minor chord of{" "}
                {params.note.length > 1
                  ? params.note[0].toUpperCase() + "#"
                  : params.note.toUpperCase()}{" "}
                is a combination of {minornotes[params.note][0]},{" "}
                {minornotes[params.note][1]} and {minornotes[params.note][2]}{" "}
                notes.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Try it Out</Accordion.Header>
              <Accordion.Body>
                <div style={{ alignItems: "center", padding: 20 }}>
                  <Piano answers={minornotes[params.note]} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    )
  );
}

export default Notepage;
