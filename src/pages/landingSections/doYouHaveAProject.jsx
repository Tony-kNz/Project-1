import React from "react";

const DoYouHaveAProject = () => {
  return (
    <>
      {/* <!-- Section Do you have a construction project --> */}
      <section
        id="history"
        className="w-full flex flex-col items-center py-20 bg-gray-300 mt-20"
      >
        {/* <!-- title --> */}
        <h3 className="font-semibold text-2xl mb-10">
          Do you have a Construction Project We Can Help With?
        </h3>
        {/* <!-- cta --> */}
        <button
          className="
          px-16
          py-3
          rounded-2
          text-white
          lg\:font-medium
          text-lg
          bg-gray-500
          cursor-pointer
        "
        >
          Contact us
        </button>
      </section>
    </>
  );
};

export default DoYouHaveAProject;
