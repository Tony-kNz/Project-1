import React from "react";
import { useHistory } from "react-router-dom";

// icon
import { ArrowRight } from "../../assets/svg";

// data
import { Projects } from "../../data";

// projectcard component
import ProjectCard from "../../components/projectCard";

const ProjectsSection = () => {
  const history = useHistory();
  return (
    <>
      {/* <!-- Section project --> */}
      <section className="bg-gray-600" id="projects">
        <div className="container mx-auto py-20 flex justify-between">
          {/* <!-- intro --> */}
          <div className="w-5/12">
            {/* <!-- title --> */}
            <h1 className="font-bold text-3xl mb-10">Projects</h1>

            {/* <!-- content --> */}
            <p className="font-semibold text-lg text-white mb-8">
              Arrow-Head Construction Ltd offers outstanding construction and
              design services for both new homes and multi-residential
              complexes. Our carefully designed strategies based on decade of
              experience in all phase of construction; we provide superior
              services,keeping our clients and partner informed ,involved , and
              confident throughout the entire process.
            </p>
            <p className="font-semibold text-lg text-white"></p>
            <div
              onClick={() => history.push("/projects")}
              className="px-4 py-3 rounded bg-gray-400 mt-10 w-max flex items-center cursor-pointer"
            >
              <span className="mr-5 text-xl font-semibold">
                View all projects
              </span>
              <ArrowRight />
            </div>
          </div>

          {/* <!-- list of first two projects --> */}
          <div className="flex w-6/12 justify-between">
            {/* <!-- project item 1 --> */}
            {Projects.slice(0, 2).map((project, index) => (
              <ProjectCard
                project={project}
                key={`project-item-view-${index}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
