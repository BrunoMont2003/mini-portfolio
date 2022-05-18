import React, { Component } from "react";
import { Link } from "react-scroll";
import me from "../../assets/me.png";
import Layout from "../Layout";
export default class About extends Component {
  render() {
    return (
      <Layout section="about">
        <div className="row h-100">
          <figure className="col-md-4 d-flex justify-content-center align-items-center my-5 my-md-0">
            <img
              className="img-fluid rounded-circle shadow"
              src={me}
              alt="brunomont"
            />
          </figure>
          <article className=" col-md-8 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-5 fw-bold">Hi I'm Bruno Mont</h1>
            <h2 className="fw-normal">Web Developer</h2>
            <div className="col-lg-6">
              <p className="lead mb-4">
                I've been learning to code for 3 years ago. I started with
                frontend fundamentals, html - css - js. Now I'm open to learn
                new technologies
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link
                  role="button"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-primary btn-lg px-4 gap-3"
                >
                  Portfolio
                </Link>
                <a
                  role="button"
                  href="https://github.com/BrunoMont2003"
                  target="_blank"
                  className="btn btn-outline-secondary btn-lg px-4"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}
