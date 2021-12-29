import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

// Carousel content
import { Projects } from "../../data";

// component
import Loader from "../../components/loader";
import LazyBacground from "../../components/lazyBacground";
import { ArrowRight } from "../../assets/svg";

const Carousel = () => {
  const [selected, setSelected] = useState(Projects[0]);
  const [show, setShow] = useState(true);

  const history = useHistory();

  const toProjectRoute = (project) => {
    history.push(`/projects/${project.index}`);
  };

  const toProjects = (e) => {
    e.preventDefault();
    e.stopPropagation();
    history.push(`/projects`);
  };

  const timer = useRef(null);

  const onSelected = (index) => {
    clearTimeout(timer.current);
    setSelected(index);
  };

  useEffect(() => {
    //slidng carousel
    timer.current = setTimeout(() => {
      setSelected({});

      const next = selected.index + 1;
      if (next >= Projects.length) {
        setSelected(Projects[0]);
        return;
      }

      setSelected(Projects[next]);
    }, 5000);

    return () => clearTimeout(timer.current);
  }, [selected.index]);

  return (
    <div className="mt-5 relative h-screen">
      {/* <!-- image --> */}
      {selected.imageUrl && (
        <LazyBacground
          onClick={() => {
            toProjectRoute(selected);
          }}
          className="h-2/3 bg-center bg-no-repeat relative cursor-pointer bg-center bg-no-repeat bg-cover"
          link={selected.imageUrl}
          onload={() => setShow(false)}
        >
          {show && (
            <div className="w-full h-full flex items-center justify-center">
              <Loader />
            </div>
          )}

          {/* <!-- project title --> */}
          <div
            onClick={toProjects}
            className="bg-white w-max px-10 py-5 font-bold text-lg absolute bottom-5 flex items-center"
          >
            <span className="mr-10 text-2xl"> View Our Projects </span>{" "}
            <ArrowRight />
          </div>

          {/* <!-- corousel select --> */}

          <div className="flex absolute bottom-5 transform left-2/4 -translate-x-2/4">
            {/* <!-- select --> */}

            {Projects &&
              Projects.map((project, index) => (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelected(project);
                  }}
                  key={`project-carousel-${index}`}
                  className={`
          w-4
          h-4
          rounded-full
         bg-gray-300
          mx-2
          cursor-pointer
          ${project.index === selected.index ? "bg-gray-900" : ""}
        `}
                ></div>
              ))}
          </div>
        </LazyBacground>
      )}
      {/* <!-- Next section title (Our core values) --> */}
      <div
        className="
      flex
      items-start
      absolute
      h-20
      bottom-20
      transform
      left-2/4
      -translate-x-2/4
    "
      >
        <h2 className="font-bold text-4xl">Our core values</h2>
      </div>
    </div>
  );
};

export default Carousel;
