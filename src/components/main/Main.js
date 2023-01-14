import React from "react";
import "./Maine.css";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: "Project 1",
          description: "This is a sample project.",
          image: "project1.jpg",
        },
        {
          name: "Project 2",
          description: "This is another sample project.",
          image: "project2.jpg",
        },
        {
          name: "Project 3",
          description: "This is yet another sample project.",
          image: "project3.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="zach">Zachary Sultan</h1>
        <div>
          {this.state.projects.map((project, index) => {
            return (
              <div key={index}>
                <h2>{project.name}</h2>
                <img src={project.image} alt={project.name} />
                <p>{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
