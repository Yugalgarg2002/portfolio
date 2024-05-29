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
import image from "../images/adi-goldstein-EUsVwEOsblE-unsplash.jpg";

const imageAltText = "";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "SURVEYING NLP TECHNIQUES FOR QUESTION ANSWERING ON SQUAD DATASET",
    description:
      "Experimenting with the state-of-the-art technique Bi-DAF with different word embeddings to improve the efficiency of the model. Understanding the code base and configuration of its baseline with different word embeddings.",
    url: "https://github.com/Yugalgarg2002/NLP_Techniques",
  },
  {
    title: "PHOTO MANAGEMENT SYSTEM",
    description:
      "Inspired by the Google Photos created a web gallery which allows seamless sharing of the pictures. • Django was utilized for the backend logic. • MongoDB is use for the Database server. • Frontend was created using the React and MaterialUI",
    // url: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Works</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
