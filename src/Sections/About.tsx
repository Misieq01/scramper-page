import React from "react";
import {ReactComponent as Img} from '../assets/unDraw2.svg'

const About = () => {
  return (
    <div className="about">
      <Img className="about__img" />
      <div className="about__text-wrapper">
        <h2>Backbone of your database</h2>
        <p>
          Scramper is powerfull tool for scrapping data for your projects. It focus on movies and series which gets from operating on sites like imdb and
          metacritic. Its futures a lot of utilities like updating data,searching for errors and lots of more which speed up process and help you in maintaing
          all of gathered info
        </p>
      </div>
    </div>
  );
};

export default About;
