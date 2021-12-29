import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

// projects data
import { Projects } from "../data";
import { ArrowRight } from "../assets/svg";

const Project = () => {
  const { id } = useParams();
  const history = useHistory();
  const [selected, setSelected] = useState(null);

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    // if param doesn't match a project return 404 page
    const match = Projects[id];

    console.log({ match, id });

    if (!match) {
      return;
    }

    // set selected project based on param

    setSelected(match);
  }, [setSelected, id]);

  return (
    <>
      {/* // <!-- content  --> */}
      {selected ? (
        <section className="container flex mx-auto mt-20">
          {/* <!-- text and image gallery --> */}
          <div className="w-5/12">
            {/* <!-- title --> */}
            <div className="flex items-center mb-10">
              <div
                onClick={goBack}
                className="transform rotate-180 flex items-center cursor-pointer"
              >
                <ArrowRight />
              </div>
              <h2 className="font-bold text-3xl ml-10">{selected?.name}</h2>
            </div>

            {/* project content */}
            <p className="font-normal text-gray-700 text-lg">
              Some Featured Projects :Arrowhead construction  has completed
              hundreds of Construction Management, General Contracting and
              Design/Build projects throughout Southeast Michigan. Our work can
              be seen in cities such as Ann Arbor, Royal Oak, Detroit, Livonia,
              Farmington, Birmingham, and Bloomfield Hills and overseas like
              Argentina,Australia ,Brazil and Dubai.
            </p>

            {/* <!-- text --> */}

            {/* <!-- image gallery --> */}
            {/* <div className="flex flex-wrap justify-between mt-16">
              {selected.otherImages &&
                selected?.otherImages.map((image, index) => (
                  <div
                    key={`project-other-image-${index}`}
                    className="h-60 w-60 rounded-sm mb-10"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                  ></div>
                ))}
            </div> */}
          </div>

          {/* <!-- main image --> */}
          <div
            className="w-6/12 ml-auto h-96 rounded-sm bg-center bg-cover bg-no-repeat "
            style={{
              backgroundImage: `url(${selected?.imageUrl})`,
            }}
          ></div>
        </section>
      ) : null}
    </>
  );
};

export default Project;
