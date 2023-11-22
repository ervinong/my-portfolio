/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/0022_HQ.jpg";

const imageAltText = "Me on my internship in Norway, 2023";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div className="intro">
        <h1 style={{ color: "white" }}>{name}</h1>
        <h2 style={{ color: "white" }}>{title}</h2>
      </div>
      <a
        href="#about"
        style={{
          textDecoration: "none",
          cursor: "pointer",
          position: "absolute",
          bottom: "16rem",
          left: "15%",
        }}
      >
        <div>
          <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
        </div>
      </a>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
