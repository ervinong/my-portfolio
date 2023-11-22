import React from "react";
import image from "../images/24.09.18.jpg";

const imageAltText = "campfire";

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
      "Created a mobile app that generates random names for your next idea. The app is built with Flutter and deployed to Github.",
    url: "https://ervinong.github.io/namer_app/#/",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Github's Javascript Codespaces (React). This site documents my experiences and interests.",
    url: "http://ervinong.github.io/my-portfolio",
  },
  {
    title: "Art/Animation Projects",
    description:
      "Created a series of drawings and animations. The projects are built with Adobe Photoshop, GIMP and Blender.",
    url: "https://www.instagram.com/early.archive",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div className="portfolio">
        <div className="campfire">
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
