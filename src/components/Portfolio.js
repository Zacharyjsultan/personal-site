import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      name: "Error-Affirmations",
      description: "This is a sample project.",
      image: "project1.jpg",
    },
    {
      name: "Desk Jockey",
      description: "This is another sample project.",
      image: "project2.jpg",
    },
    {
      name: "Barkle",
      description: "This is yet another sample project.",
      image: "project3.jpg",
    },
    {
      name: "Project 4",
      description: "This is the fourth sample project.",
      image: "project4.jpg",
    },
  ];
  return (
    <div>
      <h1 className="zach">Zach Sultan</h1>
      <div className="project-container">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <h2>{project.name}</h2>
              <img src={project.image} alt={project.name} />
              <p className="description">{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
