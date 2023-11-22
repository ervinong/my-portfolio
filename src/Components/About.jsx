/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

import image from "../images/background_remover.jpg";

const imageAltText = "green abstract background";

const description =
  "I'm a Data Science & Analytics student studying at the National University of Singapore. I believe in the potential of design and data to solve problems and drive business outcomes.";

const skillsList = [
  "Web design",
  "Full stack development",
  "Data analytics",
  "Microsoft specialist",
  "Cybersecurity",
  "Graphic design",
];

const detailOrQuote =
  "I am passionate about making a difference in my community in actionable, sustainable and meaningful ways. Let's connect to learn and grow together!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="blurb">
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="skills">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="detailOrQuote" style={{ padding: "1rem 3rem 0" }}>
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
