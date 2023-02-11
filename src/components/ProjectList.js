import React from "react";

const ProjectList = () => {
  const projects = [
    {
      name: "Weather App",
      description: "A simple weather app that displays current weather conditions for a selected location."
    },
    {
      name: "Todo List",
      description: "A web-based todo list application that allows users to add, edit, and delete items from their todo list."
    },
    {
      name: "Recipe Finder",
      description: "A recipe search engine that allows users to find recipes based on ingredients and dietary restrictions."
    }
  ];

  return (
    <ul>
      {projects.map(project => (
        <li key={project.name}>
          <h3 data-ns-test="project-name">{project.name}</h3>
          <p data-ns-test="project-description">{project.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
