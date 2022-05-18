import React, { Component } from "react";
import { Link } from "react-scroll";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="container navbar navbar-expand-md navbar-light bg-white  fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="about">
            Bruno <b>Mont</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-end "
            id="myNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  to="about"
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  to="portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  to="education"
                >
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="nav-link"
                  to="skills"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
