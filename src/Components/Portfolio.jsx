/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/24.09.18.jpg";

const imageAltText = "campfire";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Hera Solutions",
    description:
      "Designed and developed a dashboard for a startup based in Trondheim, Norway. The website is built with ReactJs, Next.js and Tailwind CSS.",
    url: "https://admin.herasolutions.no/",
  },
  {
    title: "Namer App",
    description:
      "Created a mobile app that generates random names for your next idea. The app is built with Flutter and deployed to Github pages.",
    url: "https://ervinong.github.io/namer_app/#/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Github's Javascript Codespaces (React). Includes my experiences and interests.",
    url: "http://ervinong.github.io/my-portfolio",
  },
  {
    title: "Art & Animation Projects",
    description:
      "Created a series of drawings and animations. The projects are built with Adobe Photoshop, GIMP and Blender.",
    url: "https://www.instagram.com/early.archive",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
