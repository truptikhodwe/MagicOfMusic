import { Link } from "react-router-dom";
import { notes } from "../global/constants";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-light">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li
            class="nav-link"
            style={{
              color: "#3393ff",
              fontSize: 16,
              textDecoration: "none",
              padding: 15,
            }}
          >
            Magic of Music
          </li>
          <li>
            {" "}
            <div>
              <Link
                to="/"
                class="nav-link"
                style={{
                  color: "white",
                  fontSize: 16,
                  textDecoration: "none",
                  padding: 15,
                }}
              >
                {" "}
                Home
              </Link>
            </div>
          </li>
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              style={{ color: "white", padding: 15 }}
            >
              Basics
            </a>
            <ul class="dropdown-menu">
              <li>
                <Link to={"/intro"} class="dropdown-item">
                  Introduction
                </Link>
              </li>
              <li>
                <Link to={"/chords"} class="dropdown-item">
                  About Chords
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown active">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              style={{ color: "white", padding: 15 }}
            >
              Learn and Practice
            </a>
            <ul class="dropdown-menu">
              {notes.map((item) => (
                <li>
                  <Link to={"/notes/" + item.note} class="dropdown-item">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
