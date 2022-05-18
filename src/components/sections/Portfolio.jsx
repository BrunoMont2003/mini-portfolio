import React, { Component } from "react";
import CardGroup from "../CardGroup";
import pokedex from "../../assets/pokedex.png";
import asteroids from "../../assets/asteroids.png";
import calendar from "../../assets/calendar.png";
import quiz from "../../assets/football-quiz.png";
import hospital from "../../assets/hospital.png";
import Layout from "../Layout";
const projects = [
  {
    title: "Pokedex",
    image: pokedex,
    link: "https://pokedex-bruno.netlify.app/",
    description:
      "Pokedex is a simple repository of pokemons where you can find the main atributes and abilities of each pokemon. It was made with Vanilla JS, stylized with Taiwind Css and it is consuming the POKEAPI.",
  },
  {
    title: "Near Earth Asteroids",
    image: asteroids,
    link: "https://near-earth-asteroids-bruno.netlify.app/",
    description:
      "This website presents a list of all the near earth asteroids between certain dates that the user can select. This project was  made with Vanilla JS, stylized with Taiwind Css and it is consuming the NASA API.  ",
  },
  {
    title: "Calendar Utilty",
    image: calendar,
    link: "https://calendar-utility.vercel.app/",
    description:
      "This web app presents a tool to display information (like events and time) of a personal calendar. The user can drop his .ics file and calcule. This app was made with React Js and stylized with Taiwind Css. ",
  },
  {
    title: "Football Quiz",
    image: quiz,
    link: "https://football-quiz.vercel.app/",
    description:
      "This project is a quiz where the user will prove their football knowledge. The app consumes a football API called FutDB, that contains data information of FIFA 22 ULTIMATE TEAM.  ",
  },
  {
    title: "Clinical Records System ",
    image: hospital,
    link: "https://hospital-vista-alegre.vercel.app/",
    description:
      "This webapp was made for improve the clinical record system performance of an hospital. It was built with the fullstack Framework of React, NextJS and Sql database, MySql.   ",
  },
];

export default class Portfolio extends Component {
  render() {
    return (
      <Layout section="portfolio" className="flex-column">
        <h2 className="my-5">Portfolio</h2>
        <CardGroup list={projects} />
      </Layout>
    );
  }
}
