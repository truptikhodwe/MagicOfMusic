import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notepage from "./Components/Notepage";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Intro } from "./Components/Intro";
import { Chords } from "./Components/Chords";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/intro" Component={Intro}></Route>
          <Route path="/chords" Component={Chords}></Route>
          <Route path="/notes/:note" Component={Notepage}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
