import React from "react";

import { Projects } from "../data";

import ProjectCard from "../components/projectCard";

const ProjectsView = () => {
  return (
    <div className="container mx-auto mt-16">
      <h3 className="mb-16 font-bold text-4xl text-gray-900">Our projects</h3>
      <div className="flex justify-between flex-wrap  mb-24">
        {Projects.map((project, index) => (
          <ProjectCard
            project={project}
            small
            key={`project-page-item-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
