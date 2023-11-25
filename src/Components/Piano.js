import _ from "lodash";
import React from "react";
import Alert from "react-bootstrap/Alert";

import "./Piano.css";
import { Key } from "./Key.js";
import {
  NOTES,
  VALID_KEYS,
  KEY_TO_NOTE,
  KEY_TO_NOTE1,
} from "../global/constants";

function areEqual(array1, array2) {
  console.log(array1);
  console.log(array2);
  if (array1.length === array2.length) {
    return array1.every((el) => {
      if (array2.includes(KEY_TO_NOTE1[el].toUpperCase())) {
        return true;
      }

      return false;
    });
  }

  return false;
}

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressedKeys: [],
      message: "",
    };
  }

  playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  };

  handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...this.state.pressedKeys];
    if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    var msg = "";
    if (updatedPressedKeys.length === 3) {
      if (areEqual(updatedPressedKeys, this.props.answers))
        msg = "Correct! You got it!";
      else msg = "Incorrect! Try Again!";
    }
    this.setState({
      pressedKeys: updatedPressedKeys,
      message: msg,
    });
    this.playNote(KEY_TO_NOTE[key]);
  };

  handleKeyUp = (event) => {
    const unpressedKey = event.key;
    const msg = "";
    const updatedPressedKeys = this.state.pressedKeys.filter(
      (key) => key !== unpressedKey
    );
    this.setState({
      pressedKeys: updatedPressedKeys,
      message: msg,
    });
  };
  z;

  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  };

  render() {
    const message = this.state.message;
    const keys = _.map(NOTES, (note, index) => {
      return (
        <Key key={index} note={note} pressedKeys={this.state.pressedKeys} />
      );
    });

    const audioFiles = _.map(NOTES, (note, index) => {
      return <audio id={note} key={index} src={`../../notes/${note}.mp3`} />;
    });

    return (
      <div>
        {
          <Alert
            variant={message === "Incorrect! Try Again!" ? "danger" : "primary"}
          >
            {message === "" ? "Try playing the chord by yourself!" : message}
          </Alert>
        }

        <div className="piano">{keys}</div>
        <div>{audioFiles}</div>
      </div>
    );
  }
}

export { Piano };
