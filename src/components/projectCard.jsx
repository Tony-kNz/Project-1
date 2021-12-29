import React from "react";
import { useHistory } from "react-router-dom";

const ProjectCard = ({ project, small }) => {
  const history = useHistory();
  const toProjectRoute = (project) => {
    history.push(`/projects/${project.index}`);
  };
  return (
    <div className={` ${small ? "w-3/12" : "w-5/12"}`}>
      {/* <!-- Image --> */}
      <div
        style={{ backgroundImage: `url(${project.imageUrl})` }}
        className="w-full rounded-sm h-72 bg-yellow-700 mb-10 bg-center bg-no-repeat bg-cover"
      ></div>

      {/* <!-- cta --> */}
      <div
        onClick={() => toProjectRoute(project)}
        className={`
                py-3
                w-full
                bg-gray-700
                text-white text-lg
                font-semibold
                flex
                items-center
                justify-center
                cursor-pointer
                rounded-sm
              `}
      >
        View
      </div>
    </div>
  );
};

export default ProjectCard;
