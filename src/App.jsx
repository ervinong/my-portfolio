/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const siteProps = {
  name: "Ervin Ong",
  title: "Software Engineer & Data Analyst",
  email: "E0725470@U.NUS.EDU",
  gitHub: "ervinong",
  instagram: "",
  linkedIn: "ervin-ong-69657b154",
  medium: "",
  twitter: "",
  youTube: "UCqG4Az6tXKj_R7htd6S2h4w",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
